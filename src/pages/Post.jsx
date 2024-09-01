// src/pages/home/home.jsx
import React from "react";
import styled from "styled-components";
import posts from "../data/posts";
import PostHeader from "../components/home/post/PostHeader";
import { useParams } from "react-router-dom";
import FloatingButtons from "../components/home/post/FloatingButtons";

const Post = () => {
  const { id } = useParams(); // URL에서 id를 가져옵니다.
  const postId = parseInt(id, 10); // 문자열을 숫자로 변환
  const post = posts.find((post) => post.id === postId); // 해당 id의 포스트를 찾음

  if (!post) {
    return <Container>게시물을 찾을 수 없습니다.</Container>;
  }

  return (
    <Container>
      <PostHeader post={post} />
      <FloatingButtonsContainer>
        <FloatingButtons initialLikes={post.likes} />
      </FloatingButtonsContainer>
      <ContentContainer>
        <HeaderContainer>
          <Title>{post.title}</Title>
          <MetaContainer>
            <Author>{post.author}</Author>
            <Dot>·</Dot>
            <Date>{post.date}</Date>
            <FollowButton>팔로우</FollowButton>
          </MetaContainer>
        </HeaderContainer>
        <Image src={post.imageUrl} alt={post.title} />
        <Content>{post.content}</Content>
      </ContentContainer>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 0.625rem 1.25rem;
`;

const FloatingButtonsContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  z-index: 1000; /* 다른 요소들 위에 표시되도록 설정 */
`;

const ContentContainer = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`;

const HeaderContainer = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  margin-top: 5rem;
  color: #333;
`;

const MetaContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #777;
  padding: 2rem 0;
`;

const Author = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
  color: #333;
  font-size: 1.1rem;
`;

const Dot = styled.span`
  margin: 0 0.5rem;
`;

const Date = styled.span`
  font-size: 1.1rem;
  color: #444;
`;

const FollowButton = styled.button`
  font-size: 1.1rem;
  font-weight: 900;
  margin-left: auto;
  padding: 0.4rem 1.3rem;
  background-color: white;
  border: 1px solid #2ea489;
  color: #2ea489;
  border-radius: 1rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #2ea489;
    color: white;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #333;
  margin-top: 2rem;
  white-space: pre-wrap;
`;
