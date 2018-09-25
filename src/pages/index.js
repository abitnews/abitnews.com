import React from 'react';
import styled, { keyframes } from 'styled-components';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import ScrollableAnchor from 'react-scrollable-anchor';
import { categoriesDescription } from '../categories';
import Layout from '../components/layout';
import SubscriptionForm from '../components/SubscriptionForm';
import Title from '../components/Title';

const HomePage = ({ data }) => (
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
          , our bot will find it 🤖
        </HashTag>
        <ScrollDown>
          <span style={{ fontWeight: 'bold' }}>What&apos;s inside</span>
          <ScrollDownContainer>
            <a href="#the-tech-seeker">
              <ScrollDownTriangle
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 184.75 160"
              >
                <polygon points="92.38 160 0 0 184.75 0 92.38 160" />
              </ScrollDownTriangle>
            </a>
          </ScrollDownContainer>
        </ScrollDown>
      </Content>
      <SectionContainer>
        {categoriesDescription.map((category, index) => (
          <ScrollableAnchor id={category.hashUrl} key={category.key}>
            <Section left={index % 2 ? true : false}>
              <ImgSection>
                <ImgContainer>
                  <Img fixed={data[category.key].childImageSharp.fixed} />
                </ImgContainer>
              </ImgSection>
              <div>
                <SectionTitle>
                  ~/
                  {category.title}
                </SectionTitle>
                <SectionDescription>{category.description}</SectionDescription>
              </div>
            </Section>
          </ScrollableAnchor>
        ))}
      </SectionContainer>
    </HomePageWrapper>
  </Layout>
);
HomePage.propTypes = {
  data: PropTypes.object,
};
export const query = graphql`
  query {
    techSeeker: file(relativePath: { eq: "techSeeker.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    skynet: file(relativePath: { eq: "skynet.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    frontend: file(relativePath: { eq: "frontend.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    crypto: file(relativePath: { eq: "crypto.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dev: file(relativePath: { eq: "dev.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const ImgSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgContainer = styled.div`
  border-radius: 5px;
  background-color: ${props => props.theme.mainColor};
  /* background-color: #37474f; */
  height: 120px;
  width: 120px;
`;
const SectionDescription = styled.p`
  font-size: 1.1;
  font-weight: bold;
  letter-spacing: 1px;
`;
const SectionTitle = styled.h2``;

const Section = styled.div`
  padding: 10px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: ${props => (props.left ? 'row-reverse' : 'row')};
  ${ImgContainer} {
    ${props => (props.left ? 'margin-left: 30px' : 'margin-right: 30px')};
  }
  ${SectionDescription} {
    ${props => (props.left ? 'text-align: right' : 'text-align: left')};
  }
  ${SectionTitle} {
    ${props => (props.left ? 'text-align: right' : 'text-align: left')};
  }
`;

const SectionContainer = styled.div`
  padding-bottom: 20px;
`;
const moveUpAndDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px)
  }
`;

const ScrollDownContainer = styled.div`
  padding-top: 25px;
  max-width: 50px;
  margin: auto;
  animation: ${moveUpAndDown} 0.9s infinite alternate;
`;
const ScrollDown = styled.div`
  padding-top: 30px;
`;
const ScrollDownTriangle = styled.svg`
  animation: ${moveUpAndDown} 0.9s infinite alternate;
  fill: ${props => props.theme.mainColor};
  &:hover {
    cursor: pointer;
  }
`;
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
