import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const NewsItem = ({ news }) => {
  const { title, tldr, url, category, source } = news;
  return (
    <Url href={url}>
      <NewsContainer>
        <Title>
          {title}
          &nbsp; {source ? `(${source})` : ''}
        </Title>
        <Source />
        <TLDR>{tldr}</TLDR>
        <Category>#{category}</Category>
        <Preview />
      </NewsContainer>
    </Url>
  );
};

const Category = styled.div`
  font-weight: bold;
`;
const Url = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.baseTextColor};
  &:hover {
    cursor: pointer;
  }
`;
const Source = styled.div``;
const Title = styled.h3``;
const Preview = styled.div``;
const TLDR = styled.div``;
const NewsContainer = styled.div`
  width: 100%;
  border-radius: 2px;
  padding: 15px;
  margin: 15px 0;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 20px 0px;
    transform: scale(1.01, 1.01);
    transition: all 300ms ease;
    cursor: pointer;
  }
`;

export default NewsItem;
