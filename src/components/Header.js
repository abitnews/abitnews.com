import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Header = () => (
  <HeaderContainer>
    <Navbar>
      <Left>
        <HomeLink to="/">~/</HomeLink>
      </Left>
      <Right>
        <NavLink to="/news">news</NavLink>
      </Right>
    </Navbar>
  </HeaderContainer>
);

const Left = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: flex-start;
  width: 100%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.baseTextColor};
  display: flex;
  align-items: center;
  padding: 0 10px;
  transition: 0.2s;
  &:hover {
    transition: 0.2s;
    color: ${props => props.theme.mainColor};
  }
`;
const HeaderContainer = styled.header`
  margin: auto;
  width: 100%;
`;

const Navbar = styled.nav`
  max-width: 780px;
  margin: auto;
  display: flex;
  min-height: 3rem;
`;

const HomeLink = styled(NavLink)`
  font-weight: bold;
`;

export default Header;
