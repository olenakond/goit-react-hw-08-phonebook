import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const List = styled('ul')`
  padding: 8px 16px;
  display: flex;
  gap: 20px;
  justify-content: start;
`;

export const StyledLink = styled(NavLink)`
  color: #494f52;
  font-size: 22px;
  font-weight: 500;
  text-decoration: none;
  &.active {
    color: #c9430c;
  }
`;