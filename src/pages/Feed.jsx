// src/pages/home/home.jsx
import React from "react";
import styled from "styled-components";
import Header from "../components/home/Header";
import Navigator from "../components/home/Navigator";

const Feed = () => {
  return (
    <HomeContainer>
      <Header />
      <Navigator />
    </HomeContainer>
  );
};

export default Feed;

const HomeContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 0.625rem 1.25rem;
`;
