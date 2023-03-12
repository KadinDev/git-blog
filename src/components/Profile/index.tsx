import { useEffect, useState  } from 'react'

import {
    Container,
    InfoProfile,
    Title
} from './styles'

import { 
    ArrowSquareOut,
    GithubLogo,
    Buildings,
    Users 
} from 'phosphor-react'

import { api } from '../../services/api';

interface UserProps {
    avatar_url: string;
    name: string;
    bio: string;
    login: string;
    followers: number;
    company?: string;
    html_url: string;
}

export function Profile () {

    const [user, setUser] = useState({} as UserProps)

    useEffect(() => {
        async function loadInfoUser(){
            const response = await api.get('users/KadinDev')
            setUser(response.data)
        }
        loadInfoUser()
    },[])

    return (
        <Container>
            <img src={user.avatar_url} alt="Image Profile" />

            <InfoProfile>
                <Title>
                    <h1> {user.name} </h1>
                    <span> 
                        <a href={`${user.html_url}`} target='_blank' >
                            GITHUB
                            <ArrowSquareOut size={22} color={'#3294F8'} />
                        </a> 
                    </span>
                </Title>

                <p> {user.bio} </p>

                <section>
                    <span>
                        <GithubLogo style={{marginRight: '0.5rem'}} size={18} color={'#3A536B'} />
                        {user.login}
                    </span>
                    <span>
                        { user.company && (
                            <>
                            <Buildings style={{marginRight: '0.5rem'}} size={18} color={'#3A536B'} />
                            {user.company}
                            </>
                        )}
                    </span>
                    <span>
                        <Users style={{marginRight: '0.5rem'}} size={18} color={'#3A536B'} />
                        {user.followers} seguidores
                    </span>
                </section>

            </InfoProfile>
        
        </Container>
    )
}