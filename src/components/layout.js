import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Head from './Head';
import Footer from './Footer';
import Header from './Header';

const theme = {
  mainColor: '#05c3b6',
  baseTextColor: '#37474f',
  secondaryColor: '#607d8b',
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Head />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
injectGlobal`
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
    color: ${theme.baseTextColor};
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Main = styled.main`
  min-height: 100vh;
`;
export default Layout;
