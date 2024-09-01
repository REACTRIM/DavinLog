// src/components/home/PostCard.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <Card to={`/post/${post.id}`}>
      <ImageContainer>
        <Image src={post.imageUrl} alt={post.title} />
      </ImageContainer>
      <Content>
        <Title>{post.title}</Title>
        <Summary>{post.summary}</Summary>
        <Footer>
          <Author>{post.author}</Author>
          <Metadata>
            <span>{post.date}</span>
            <Likes>❤️ {post.likes}</Likes>
          </Metadata>
        </Footer>
      </Content>
    </Card>
  );
};

export default PostCard;

const Card = styled(Link)`
  display: block;
  border: 0.0625rem solid #f0f0f0;
  overflow: hidden;
  //background-color: #fff;
  transition: box-shadow 0.2s, transform 0.2s;
  text-decoration: none;
  color: inherit; /* 텍스트 색상을 상속하여 기본 스타일 유지 */
 margin: 0.5rem;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    transform: translateY(-0.625rem);
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 11rem;
  overflow: hidden;
  background-color: #f0f0f0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-top: 0.0625rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  font-weight: bold;
`;

const Summary = styled.p`
  font-size: 0.95rem;
  color: #757575;
  margin-bottom: 3rem;
  line-height: 1.5;
  height: 5rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #555;
`;

const Author = styled.span`
  color: #333;
`;

const Metadata = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Likes = styled.span`
  color: #ff686b;
`;
