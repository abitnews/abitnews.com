import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from './icons';

const Footer = () => (
  <FooterContainer>
    <SocialContainer>
      <SocialIcon social="twitter" link="https://twitter.com/abitnewsbot" />
      <SocialIcon
        social="github"
        link="https://github.com/forgiangi/abit.news"
      />
    </SocialContainer>
    <EmailLink target="_blank" href="mailto:hello@abitnews.com">
      hello@abitnews.com
    </EmailLink>
  </FooterContainer>
);

const EmailLink = styled.a`
  text-align: center;
  display: block;
  text-decoration: none;
  color: #000629;
  font-weight: 700;
  font-size: 20px;
  padding: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const FooterContainer = styled.footer`
  min-height: 10vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default Footer;
