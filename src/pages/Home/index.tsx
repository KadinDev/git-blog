import { useEffect, useState } from "react";

import { Profile } from "../../components/Profile"
import { PostCard } from "../../components/PostCard"

import { useForm } from "react-hook-form";

import { 
    Container, 
    Section,
    SearchForm
} from './styles'

import { api } from "../../services/api";

export type PostType = {
    body: string;
    title: string;
    created_at: string;
    id: number;
    html_url: string;
    number: number;
    comments: number;
    login: string;
    user: {
      login: string;
    };
}; 

interface UserProps {
    company: string;
    followers: number;
    bio: string;
    name: string;
    login: string;
    html_url: string;
    posts: PostType[];
}

export function Home(){

    const [user, setUser] = useState<UserProps>({} as UserProps);
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        (async () => {
          try {
            const resp = await api.get("/users/KadinDev");
            const userData = resp.data;
    
            const issues = await api.get("/search/issues", {
              params: {
                q: "repo:KadinDev/git-blog is:issue",
              },
            });

            setUser({ ...userData, posts: issues.data.items });

          } catch (error) {
            console.log(error);
          }
        })();
    }, []);


    const handleSearch = async (data: any) => {
        try {
          const issues = await api.get("/search/issues", {
            params: {
              q: `repo:KadinDev/git-blog is:issue ${data.query}`,
            },
          });
    
          setUser((state) => {
            return { ...state, posts: issues.data.items };
          });
        } catch (error) {
          console.log(error);
        }
    };


    const { posts = [] } = user;

    return (
        <div>
            
            <Container>
                <Profile/>

                <SearchForm onSubmit={handleSubmit(handleSearch)}>
                    <div>
                    <h4>Publicações</h4>
                    <p>{`${posts.length} ${
                        posts.length > 1 || posts.length === 0
                        ? "publicações"
                        : "publicação"
                    }`}</p>
                    </div>
                    <input
                    type="text"
                    placeholder="Buscar conteúdo"
                    {...register("query")}
                    />
                </SearchForm>
                
                <Section>
                    {posts.map((post: PostType) => (
                        <PostCard {...post} key={post.id} />
                    ))}
                </Section>

            </Container>
        </div>
    )
}