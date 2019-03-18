import React from 'react';
import styled, { css } from 'styled-components';
import Link from './Link';
import PropTypes from 'prop-types';
import IconGithub from './icons/Github';
import IconLinkedin from './icons/Linkedin';
import IconTwitter from './icons/Twitter';
import IconReddit from './icons/Reddit';

const SocialIcon = ({ social, link }) => {
  const selectSocial = () => {
    switch (social) {
      case 'twitter':
        return (
          <Link to={link}>
            <SocialIconWrapper twitter>
              <IconTwitter />
            </SocialIconWrapper>
          </Link>
        );
      case 'linkedin':
        return (
          <Link to={link}>
            <SocialIconWrapper linkedin>
              <IconLinkedin />
            </SocialIconWrapper>
          </Link>
        );
      case 'github':
        return (
          <Link to={link}>
            <SocialIconWrapper github>
              <IconGithub />
            </SocialIconWrapper>
          </Link>
        );
      case 'reddit':
        return (
          <Link to={link}>
            <SocialIconWrapper reddit>
              <IconReddit />
            </SocialIconWrapper>
          </Link>
        );
      default:
        return <div />;
    }
  };
  return <div>{selectSocial()}</div>;
};

SocialIcon.propTypes = {
  social: PropTypes.string,
  link: PropTypes.string,
};
const SocialIconWrapper = styled.div`
  height: 40px;
  width: 40px;
  @media screen and (max-width: 750px), (max-height: 750px) {
    height: 35px;
    width: 35px;
    margin: 0 12px;
  }
  @media screen and (max-width: 525px), (max-height: 525px) {
    height: 30px;
    width: 30px;
    margin: 0 10px;
  }
  transform: rotate(45deg);
  ${props =>
    props.facebook &&
    css`
      background-color: #3b5998;
    `};
  ${props =>
    props.twitter &&
    css`
      background-color: #1da1f2;
    `};
  ${props =>
    props.linkedin &&
    css`
      background-color: #0077b5;
    `};
  ${props =>
    props.github &&
    css`
      background-color: #000;
    `};
  ${props =>
    props.reddit &&
    css`
      background-color: #ff4500;
    `};
  border-radius: 6px;
  transition: all 1s;
  margin: 0 15px;
  position: relative;
  svg {
    transition: all 1s;
    transform: rotate(-45deg);
    fill: white;
  }
  &:hover {
    transform: rotate(360deg);
    svg {
      transform: rotate(-360deg);
    }
  }
`;
export {
  IconGithub,
  IconTwitter,
  IconLinkedin,
  IconMedium,
  SocialIcon,
  IconAbitCompany,
};
