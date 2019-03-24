import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import SEO from 'components/SEO';

export default function Template({ data, pageContext }) {
  console.log(data);
  console.log(pageContext);
  const issue = data.markdownRemark;

  const { previous, next } = pageContext;

  return (
    <IssueContainer>
      <SEO
        title={issue.frontmatter.title}
        description={issue.frontmatter.description || issue.excerpt}
      />
      <Frontmatter>
        <Title>{issue.frontmatter.title}</Title>
        <Date>{issue.frontmatter.date}</Date>
      </Frontmatter>
      {/* <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul> */}
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: issue.html }}
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
  /* h3 {
    margin-left: 10px;
  } */
  p {
    margin-left: 8px;
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
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
