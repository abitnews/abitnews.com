import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <IssueContainer>
      <Frontmatter>
        <Title>{frontmatter.title}</Title>
        <Date>{frontmatter.date}</Date>
      </Frontmatter>

      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </IssueContainer>
  );
}

const Frontmatter = styled.div`
  margin-bottom: 40px;
`;
const IssueContainer = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 800px;
  a {
    color: ${({ theme }) => theme.baseTextColor};
    &:hover {
      color: ${({ theme }) => theme.mainColor};
    }
  }
  h2 {
    margin-top: 50px;
    color: ${({ theme }) => theme.mainColor};
    @media screen and (max-width: 475px) {
      font-size: 1.5rem;
    }
  }
  p {
    @media screen and (max-width: 475px) {
      font-size: 0.9rem;
    }
  }
`;

const Title = styled.h1`
  margin-bottom: 0;
  font-size: 3rem;
  color: ${({ theme }) => theme.mainColor};
`;
const Date = styled.div``;
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
