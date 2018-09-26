import React from 'react';
import styled, { keyframes } from 'styled-components';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import ScrollableAnchor from 'react-scrollable-anchor';
import { categoriesDescription, categories } from '../categories';
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
            <a
              href={`#${categoriesDescription[0].hashUrl}`}
              aria-label="scroll-down"
            >
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
                <ImgContainer category={category.key}>
                  <Img fluid={data[category.key].childImageSharp.fluid} />
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
        fluid(maxWidth: 125) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    skynet: file(relativePath: { eq: "skynet.png" }) {
      childImageSharp {
        fluid(maxWidth: 125) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    frontend: file(relativePath: { eq: "frontend.png" }) {
      childImageSharp {
        fluid(maxWidth: 125) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    crypto: file(relativePath: { eq: "crypto.png" }) {
      childImageSharp {
        fluid(maxWidth: 125) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dev: file(relativePath: { eq: "dev.png" }) {
      childImageSharp {
        fluid(maxWidth: 125) {
          ...GatsbyImageSharpFluid
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

const colors = {
  techSeeker: 'background-color: #f06292',
  skynet: 'background-color: #5c6bc0',
  frontend: 'background-color: #0091ea',
  crypto: 'background-color: #65c3ad',
  dev: 'background-color: #d84315',
};

const gradients = {
  techSeeker:
    'background-image: linear-gradient(60deg, #ff758c 0%, #ff7eb3 100%);',
  skynet: 'background-image: linear-gradient(60deg, #9575cd 0%, #7e57c2 100%)',
  frontend:
    'background-image: linear-gradient(60deg, #00b8d4 0%, #039be5 100%)',
  crypto: 'background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%)',
  dev: 'background-image: linear-gradient(60deg, #f57f17 0%, #ff5722 100%)',
};

const ImgContainer = styled.div`
  border-radius: 5px;
  ${props => gradients[props.category]};
  height: 125px;
  width: 125px;
  @media screen and (max-width: 800px) {
    height: 90px;
    width: 90px;
  }
`;
const SectionDescription = styled.p`
  font-size: 1.1;
  letter-spacing: 1px;
  @media screen and (max-width: 800px) {
    font-size: 0.85rem;
  }
  @media screen and (max-width: 475px) {
    font-size: 0.75rem;
  }
`;
const SectionTitle = styled.h2`
  @media screen and (max-width: 800px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 475px) {
    font-size: 1rem;
  }
`;

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
  fill: ${props => props.theme.baseTextColor};
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
    font-size: 0.9rem;
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
  max-width: 800px;
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
