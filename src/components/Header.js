import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import ThemeSwitch from 'components/ThemeSwitch';

const Header = ({ currentTheme, handleThemeChange }) => (
  <HeaderContainer>
    <Navbar>
      <Left>
        <HomeLink
          to="/"
          activeStyle={{
            display: 'none',
          }}
        >
          ~
        </HomeLink>
      </Left>
      <Right>
        <NavLink
          to="/issues"
          activeStyle={{
            display: 'none',
          }}
        >
          ~/issues
        </NavLink>
      </Right>
      <ActionsContainer>
        <ThemeSwitch onChange={handleThemeChange} currentTheme={currentTheme} />
      </ActionsContainer>
    </Navbar>
  </HeaderContainer>
);

const ActionsContainer = styled.div`
  margin-left: 30px;
  display: inline-flex;
`;
const Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
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
  padding: 0 10px;
  transition: 0.2s;
  white-space: nowrap;
  font-weight: 700;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    transition: 0.2s;
    color: ${props => props.theme.mainColor};
  }
  @media screen and (max-width: 475px) {
    font-size: 0.9rem;
  }
`;

const HomeLink = styled(NavLink)`
  font-size: 2em;
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
  align-items: center;
`;

export default Header;
