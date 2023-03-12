
import {
    PostCardContainer,
} from './styles'

import { PostType } from "../../pages/Home";
import { getDistance } from "../../utils/FormatDate";

import ReactMarkdown from "react-markdown";


export function PostCard( {title, body, created_at, number} : PostType ){
    
    const preview = body.split(" ", 15).join(" ").concat("...");

    return (
        <PostCardContainer>
            <div>
                <button
                    onClick={() => window.location.href = `post/${number}`}
                >
                    <h1> {title} </h1>
                </button>
                <p> {`Há ${getDistance(created_at)}`} </p>
            </div>

            <p> {preview} </p>
        
        </PostCardContainer>
    )
}