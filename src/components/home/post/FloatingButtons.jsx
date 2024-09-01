import React, { useState } from "react";
import styled from "styled-components";
import posts from "../../../data/posts";

const FloatingButtons = ({ initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes); // 초기 좋아요 수
  const [liked, setLiked] = useState(false); // 좋아요 클릭 여부

  const handleLikeClick = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked); // 좋아요 클릭 여부를 토글
  };

  return (
    <ButtonContainer>
      <Button onClick={handleLikeClick}>
        <HeartIcon>♥️</HeartIcon>
      </Button>
      <Count>{likes}</Count>
      <Button>
        <ShareIcon>🔗</ShareIcon>
      </Button>
    </ButtonContainer>
  );
};

export default FloatingButtons;

const ButtonContainer = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 1000;
  background-color: #f8f9fa;
  border-radius: 1.5rem;
  padding: 0.3rem;
`;

const Button = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: white;
  border: 0.0625rem solid #dee2e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #e9ecef;
  }
`;

const HeartIcon = styled.div`
  font-size: 2rem;
  color: #495057;
`;

const Count = styled.span`
  margin-top: -0.8rem;
  font-size: 1rem;
  color: #495057;
`;

const ShareIcon = styled.div`
  font-size: 1.5rem;
  color: #495057;
`;
