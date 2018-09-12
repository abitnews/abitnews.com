import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    <div>footer</div>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  min-height: 10vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default Footer;
