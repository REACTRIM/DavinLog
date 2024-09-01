import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Navigator = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <NavLinks>
        <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
          🔥 트렌딩
        </NavLink>
        <NavLink
          to="/recent"
          className={location.pathname === "/recent" ? "active" : ""}
        >
          ⏰ 최신
        </NavLink>
        <NavLink
          to="/feed"
          className={location.pathname === "/feed" ? "active" : ""}
        >
          📡 피드
        </NavLink>
      </NavLinks>
      <FilterOptions>
        <FilterSelect defaultValue="this_week">
          <option value="today">오늘</option>
          <option value="this_week">이번 주</option>
          <option value="this_month">이번 달</option>
          <option value="this_year">올해</option>
        </FilterSelect>
        <FilterButton>⋮</FilterButton>
      </FilterOptions>
    </NavContainer>
  );
};

export default Navigator;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 0;
  margin-bottom: 3.125rem;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const NavLink = styled(Link)`
  font-size: 1.3125rem;
  color: #555;
  text-decoration: none;
  padding-bottom: 0.5625rem; /* 밑줄과의 간격 조정을 위해 */

  &:hover {
    color: #000;
  }

  &.active {
    font-weight: bold;
    color: #000;
    border-bottom: 0.1563rem solid #000; /* 밑줄 추가 */
  }
`;

const FilterOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FilterSelect = styled.select`
  padding: 0.3125rem 0.625rem;
  border-radius: 0.3125rem;
  border: 0.0625rem solid #ddd;
  cursor: pointer;
  font-size: 0.875rem;
  color: #555;

  &:hover {
    background-color: #f1f3f5;
  }

  &:focus {
    outline: none;
  }
`;

const FilterButton = styled.button`
  padding: 0.3125rem 0.625rem;
  border-radius: 0.3125rem;
  border: 0.0625rem solid #ddd;
  cursor: pointer;
  font-size: 0.875rem;
  &:hover {
    background-color: #f1f3f5;
  }
`;
