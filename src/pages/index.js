import React from 'react';
import styled, { keyframes } from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
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
          {/* <SubTitle>Technology newsletter</SubTitle>
          <SubSubTitle>
            <FractionContainer>
              <Numerator>1</Numerator>
              <Separator>/</Separator>
              <Denominator>2</Denominator>
            </FractionContainer>
            <span style={{ marginRight: '20px' }}>human</span>
            <FractionContainer>
              <Numerator>1</Numerator>
              <Separator>/</Separator>
              <Denominator>2</Denominator>
            </FractionContainer>
            bot
          </SubSubTitle> */}
          <SubSubTitle>1/2 human, 1/2 bot</SubSubTitle>
          <SubscriptionForm />
        </div>

        <ScrollDown>
          <span style={{ fontWeight: 'bold' }}>What&apos;s inside</span>
          <ScrollDownContainer>
            <a
              aria-label="scroll-down"
              onClick={() => {
                const element = document.getElementById('techSeeker');
                const y = element.getBoundingClientRect().top + window.scrollY;
                if (element) {
                  window.scroll({
                    top: y,
                    behavior: 'smooth',
                  });
                }
              }}
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
          <Section
            left={index % 2 ? true : false}
            key={category.key}
            id={category.key}
          >
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
        ))}
      </SectionContainer>
    </HomePageWrapper>
  </Layout>
);

const FractionContainer = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  letter-spacing: 0.001em;
  text-align: center;
  margin-right: 10px;
`;

const Numerator = styled.span`
  display: block;
  padding: 0.1em;
`;

const Denominator = styled.span`
  border-top: thin solid black;
`;

const Separator = styled.span`
  display: none;
`;
const ImgSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const colors = {
//   techSeeker: 'background-color: #f06292',
//   skynet: 'background-color: #5c6bc0',
//   frontend: 'background-color: #0091ea',
//   crypto: 'background-color: #65c3ad',
//   dev: 'background-color: #d84315',
// };

const gradients = {
  techSeeker:
    'background-image: linear-gradient(60deg, #ff758c 0%, #ff7eb3 100%);',
  skynet:
    'background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);',
  frontend:
    'background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);',

  crypto: 'background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%)',
  dev: 'background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);',
};

const SubSubTitle = styled.div`
  font-size: 1.3em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (max-width: 475px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;
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
  fill: ${props => props.theme.mainColor};
  &:hover {
    cursor: pointer;
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
  margin: 20px 0 10px 0;
  @media screen and (max-width: 475px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

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

export default HomePage;
