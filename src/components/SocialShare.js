import React from 'react';
import styled, { css } from 'styled-components';
import {
  IconTwitter,
  IconLinkedin,
  IconReddit,
} from 'components/icons/SocialIcon';

export default function SocialShare({ url, title }) {
  function handleShareTwitter(e) {
    e.preventDefault();
    console.log(title);
    console.log('share on twitter', `${url}`);
    // var url = 'http://google.com';
    const text = `Checkout abitnews ${title}' @abitnewsbot`;
    window.open(
      `http://twitter.com/share?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(text)}`,
      'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
    );
  }

  function handleShareLinkedin(e) {
    e.preventDefault();
    window.open(
      'http://www.linkedin.com/shareArticle?mini=true&url=' +
        encodeURIComponent('https://abitnews.com'),
      '',
      'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
    );
    // const text = `Checkout abitnews ${title}' @abitnewsbot`;
    // window.open(
    //   `http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    //     url
    //   )}`,
    //   'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
    // );
  }

  function handleShareReddit(e) {
    e.preventDefault();
    const postTitle = `Checkout abitnews ${title}`;

    window.open(
      `http://www.reddit.com/submit?url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(postTitle)}`,
      'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
    );
  }
  return (
    <ShareContainer>
      <IconContainer>
        <IconTwitterShare onClick={handleShareTwitter} />
      </IconContainer>
      <IconContainer>
        <IconRedditShare onClick={handleShareReddit} />
      </IconContainer>
      <IconContainer>
        <IconLinkedinShare small onClick={handleShareLinkedin} />
      </IconContainer>
    </ShareContainer>
  );
}

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  width: 50px;
`;
const icon = css`
  height: 40px;
  fill: ${({ theme }) => theme.baseTextColor};
  &:hover {
    cursor: pointer;
    fill: ${({ theme }) => theme.mainColor};
  }
`;
const IconTwitterShare = styled(IconTwitter)`
  ${icon};
`;

const IconLinkedinShare = styled(IconLinkedin)`
  ${icon};
  margin-top: 3px;
`;

const IconRedditShare = styled(IconReddit)`
  ${icon};
`;

const ShareContainer = styled.div`
  display: flex;
  align-items: center;
`;
