import React, { useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import SEO from './SEO';
import Footer from './Footer';
import Header from './Header';

const lightTheme = {
  mainColor: '#4353ff', //7682ff
  baseTextColor: '#37474f',
  secondaryColor: '#607d8b',
  backgroundColor: '#fff',
  backgroundContrast: '#263238',
};

const darkTheme = {
  mainColor: '#f48fb1', //7682ff
  baseTextColor: '#fff',
  secondaryColor: '#b0bec5',
  backgroundColor: '#263238',
  backgroundContrast: '#455a64',
};

export default function Layout({ children }) {
  const [theme, setTheme] = useState('light');

  useLayoutEffect(
    () => {
      const preferredTheme = localStorage.getItem('theme');
      if (preferredTheme) {
        setTheme(preferredTheme);
      }
    },
    [theme]
  );

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AppContainer>
        <SEO />
        <Header
          currentTheme={theme}
          handleThemeChange={() => {
            localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        />
        <Main>{children}</Main>
        <Footer />
        <GlobalStyle />
      </AppContainer>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
      box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto mono', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-weight: 400;
    letter-spacing: 1px;
  }
`;

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.baseTextColor};
  a {
    transition: 0.3s;
    color: ${({ theme }) => theme.baseTextColor};
    &:hover {
      transition: 0.3s;
      color: ${({ theme }) => theme.mainColor};
    }
  }
`;
const Main = styled.main`
  min-height: 100vh;
`;
