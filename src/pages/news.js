import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const NewsPage = () => (
  <Layout>
    <NewsPageWrapper>News</NewsPageWrapper>
  </Layout>
);

const NewsPageWrapper = styled.div`
  max-width: 780px;
  margin: auto;
  padding-top: 30px;
`;
export default NewsPage;
