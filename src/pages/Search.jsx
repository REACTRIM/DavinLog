import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/home/Header";
import PostCard from "../components/home/PostCard";
import postsData from "../data/posts"; // posts 데이터를 가져옵니다.

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어를 저장할 상태

  // 검색어에 따라 데이터를 필터링
  const filteredPosts = postsData.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <HomeContainer>
        <Header />
      </HomeContainer>
      <CenteredContainer>
        <SearchContainer>
          <SearchIcon>🔎</SearchIcon>
          <SearchInput
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </CenteredContainer>
      <ResultsContainer>
        {searchTerm ? (
          filteredPosts.length > 0 ? (
            filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <NoResults>검색 결과가 없습니다.</NoResults>
          )
        ) : (
          <NoResults> </NoResults> // 기본 화면에 안내 메시지 표시
        )}
      </ResultsContainer>
    </>
  );
};

export default Search;

const HomeContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 0.625rem 1.25rem;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.25rem 0; /* 상하 여백을 추가하여 중앙에 배치 */
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50rem;
  border: 0.0625rem solid #ccc;
  padding: 1.25rem;
`;

const SearchIcon = styled.div`
  width: 1.625rem;
  height: 1.625rem;
  margin-right: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 1.6875rem;
  width: 100%;
  color: #555;

  &::placeholder {
    color: #999;
  }
`;

const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
  max-width: 53.5rem;
  margin: 0 auto;
`;

const NoResults = styled.div`
  text-align: center;
  font-size: 1.25rem;
  color: #555;
  padding: 2rem;
`;
