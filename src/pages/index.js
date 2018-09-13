import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SubscriptionForm from '../components/SubscriptionForm';
import Title from '../components/Title';

const HomePage = () => (
  <Layout>
    <HomePageWrapper>
      <Content>
        <TitleContainer>
          <Title />
        </TitleContainer>
        <div>
          <SubTitle>Technology newsletter</SubTitle>
          <SubscriptionForm />
        </div>
        <HashTag>
          Use the hashtag{' '}
          <Link
            href="https://twitter.com/search?q=%23abitnews"
            style={{ fontWeight: 'bold' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            #abitnews
          </Link>{' '}
          or tag&nbsp;
          <Link
            href="https://twitter.com/abitnewsbot"
            style={{ fontWeight: 'bold' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            @abitnewsbot
          </Link>
          , our bots fill find it 🤖
        </HashTag>
      </Content>
    </HomePageWrapper>
  </Layout>
);

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.baseTextColor};
  &:hover {
    transition: 0.2s;
    color: ${props => props.theme.mainColor};
  }
`;
const HashTag = styled.h3`
  font-weight: 400;
  text-align: center;
  margin-top: 25px;
  @media screen and (max-width: 475px) {
    font-size: 1rem;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
const HomePageWrapper = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 780px;
`;
const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  @media screen and (max-width: 475px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

export default HomePage;
