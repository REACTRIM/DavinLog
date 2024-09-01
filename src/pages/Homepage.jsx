// src/pages/home/home.jsx
import React from "react";
import styled from "styled-components";
import PostCard from "../components/home/PostCard";
import posts from "../data/posts"; // posts 데이터를 import
import Header from "../components/home/Header";
import Navigator from "../components/home/Navigator";

const Homepage = () => {
  return (
    <HomeContainer>
      <Header />
      <Navigator />
      <PostGrid>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostGrid>
    </HomeContainer>
  );
};

export default Homepage;

const HomeContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 0.625rem 1.25rem;
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  gap: 1.5rem;
`;
