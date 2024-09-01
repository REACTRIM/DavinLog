// src/pages/home/home.jsx
import React from "react";
import styled from "styled-components";
import PostCard from "../components/home/PostCard";
import posts from "../data/posts"; // posts 데이터를 import
import Header from "../components/home/Header";
import Navigator from "../components/home/Navigator";

const Recent = () => {
  const sortedPosts = [...posts].sort((a, b) => {
    // 날짜 형식이 "YYYY년 MM월 DD일"인 경우를 처리
    const formatDateString = (dateString) => {
      const [year, month, day] = dateString.match(/\d+/g).map(Number);
      return new Date(year, month - 1, day);
    };

    const dateA = formatDateString(a.date);
    const dateB = formatDateString(b.date);

    return dateB - dateA; // 최신순으로 정렬
  });

  return (
    <HomeContainer>
      <Header />
      <Navigator />
      <PostGrid>
        {sortedPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostGrid>
    </HomeContainer>
  );
};

export default Recent;

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
