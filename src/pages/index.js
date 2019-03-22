import React from 'react';
import styled, { keyframes } from 'styled-components';
import { categoriesDescription } from '../categories';
import Layout from '../components/layout';
import SubscriptionForm from '../components/SubscriptionForm';
import Title from '../components/Title';
import {
  DevsDen,
  TechSeeker,
  Skynet,
  CryptoProphet,
  YeahScience,
  Frontend,
  Nerdvana,
} from 'components/icons/categories';

function getIcon(category) {
  console.log(category);
  switch (category) {
    case 'techSeeker':
      // console.log('TECHSEEKER');
      return <TechSeeker />;
    case 'devs':
      return <DevsDen />;
    case 'skynet':
      return <Skynet />;
    case 'yeahScience':
      return <YeahScience />;
    case 'crypto':
      return <CryptoProphet />;
    case 'frontend':
      return <Frontend />;
    case 'nerdvana':
      return <Nerdvana />;
    default:
      console.log('DEFAULT');
      return null;
  }
}

const HomePage = () => (
  <Layout>
    <HomePageWrapper>
      <Content>
        <TitleContainer>
          <Title />
        </TitleContainer>
        <SubTitle>bit sized technology newsletter</SubTitle>
        <SubSubTitle>1/2 human, 1/2 bot </SubSubTitle>
        <SubscriptionForm />
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
                {getIcon(category.key)}
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
  // techSeeker:
  //   'background-image: linear-gradient(60deg, #ff758c 0%, #ff7eb3 100%);',
  techSeeker:
    'background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);',
  // nerdvana:
  //   'background-image: linear-gradient(60deg, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);',
  nerdvana:
    'background-image: linear-gradient(to top, #e14fad 0%, #f9d423 100%);',
  yeahScience:
    'background-image: linear-gradient(135deg, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);',
  skynet:
    'background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);',
  // frontend:
  //   'background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);',
  // frontend:
  //   'background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);',
  frontend:
    'background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);',

  crypto: 'background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%)',
  devs: 'background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);',
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
  padding: 10px;
  ${props => gradients[props.category]};
  height: 125px;
  width: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: 100%;
  }
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
  text-align: center;
  margin: 20px 0 10px 0;
  @media screen and (max-width: 475px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

// export const query = graphql`
//   query {
//     techSeeker: file(relativePath: { eq: "techSeeker.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 125) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     skynet: file(relativePath: { eq: "skynet.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 125) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     frontend: file(relativePath: { eq: "frontend.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 125) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     crypto: file(relativePath: { eq: "crypto.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 125) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     dev: file(relativePath: { eq: "dev.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 125) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

export default HomePage;
