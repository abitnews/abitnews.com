import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from './icons';

const Footer = () => (
  <FooterContainer>
    <SocialContainer>
      <SocialIcon social="twitter" link="https://twitter.com/abitnewsbot" />
      <SocialIcon social="github" link="https://github.com/abitnews" />
      <SocialIcon
        social="linkedin"
        link="https://www.linkedin.com/company/abitnews/"
      />
      <SocialIcon
        social="reddit"
        link="https://www.linkedin.com/company/abitnews/"
      />
    </SocialContainer>
    <EmailLink target="_blank" href="mailto:hello@abitnews.com">
      hello@abitnews.com
    </EmailLink>
    <HashTag>
      Use the hashtag{' '}
      <Link
        href="https://twitter.com/search?q=%23abitnews"
        style={{ fontWeight: 'bold' }}
        aria-label="twitter-search-hashtag"
        target="_blank"
        rel="noopener noreferrer"
      >
        #abitnews
      </Link>{' '}
      or tag&nbsp;
      <Link
        href="https://twitter.com/abitnewsbot"
        style={{ fontWeight: 'bold' }}
        aria-label="twitter-account"
        target="_blank"
        rel="noopener noreferrer"
      >
        @abitnewsbot
      </Link>
      , our bot will find it 🤖
    </HashTag>
  </FooterContainer>
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
    font-size: 0.9rem;
  }
`;
const EmailLink = styled.a`
  text-align: center;
  display: block;
  text-decoration: none;
  color: #000629;
  font-weight: 700;
  font-size: 20px;
  padding: 20px 0;
  @media screen and (max-width: 475px) {
    font-size: 1rem;
  }
`;
const SocialContainer = styled.div`
  display: flex;
`;
const FooterContainer = styled.footer`
  padding: 100px 50px;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default Footer;
