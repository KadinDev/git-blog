import { PostContainer, Card, Content } from "./styles";
import { InfoProfile } from '../../components/Profile/styles'
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";

import { ArrowArcRight, ArrowArcLeft } from 'phosphor-react';
import { Calendar, GithubLogo } from "phosphor-react";
import { Command } from "phosphor-react";

import { PostType } from "../Home";

import { api } from "../../services/api";

import { getDistance } from "../../utils/FormatDate";

export const Post = () => {
  const { postNumber } = useParams();
  const [post, setPost] = useState<PostType>({} as PostType);

  useEffect(() => {
    (async () => {
      try {
        const issue = await api.get(
          `/repos/KadinDev/git-blog/issues/${postNumber}`
        );
        setPost(issue.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const {
    html_url,
    comments,
    created_at = new Date(),
    body,
    user,
    title,
  } = post;

  return (
    <PostContainer>
      <Card>
        <div>
          <a href="/">
            <ArrowArcLeft />
            Voltar
          </a>
          <a href={html_url}>
            Ver no Github <ArrowArcRight />
          </a>
        </div>
        <h3>{title}</h3>
        <InfoProfile>
          <span>
            <GithubLogo />
            {user?.login}
          </span>
          <span>
            <Calendar />
            {"Há " + getDistance(created_at)}
          </span>
          <span>
            <Command />
            {comments}
          </span>
        </InfoProfile>
      </Card>
      <Content>
        <ReactMarkdown>{body}</ReactMarkdown>
      </Content>
    </PostContainer>
  );
};
