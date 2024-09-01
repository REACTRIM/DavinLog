// src/components/Header.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">velog</Logo>
      <NavIcons>
        <NavIcon to="/notifications">🔔</NavIcon>
        <NavIcon to="/search">🔍</NavIcon>
        <LoginButton to="/login">로그인</LoginButton>
      </NavIcons>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 1.875rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  text-decoration: none;
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const NavIcon = styled(Link)`
  font-size: 1.25rem;
  color: #555;
  text-decoration: none;
  &:hover {
    color: #000;
  }
`;

const LoginButton = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 1.25rem;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    background-color: #555;
  }
`;
