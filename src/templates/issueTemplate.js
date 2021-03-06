import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import SEO from 'components/SEO';
import SocialShare from 'components/SocialShare';

export default function Template({ data, pageContext }) {
  const issue = data.markdownRemark;
  const { previous, next } = pageContext;
  console.log(previous);
  console.log(next);
  return (
    <IssueContainer>
      <SEO
        title={issue.frontmatter.title}
        description={issue.frontmatter.description || issue.excerpt}
      />
      <Frontmatter>
        <Title>{issue.frontmatter.title}</Title>
        <Date>{issue.frontmatter.date}</Date>
        <SocialShare
          url={`${data.site.siteMetadata.siteUrl}${pageContext.slug}`}
          title={issue.frontmatter.title}
        />
        <PrevNext>
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
        </PrevNext>
      </Frontmatter>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: issue.html }}
      />
    </IssueContainer>
  );
}

const PrevNext = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const Frontmatter = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 475px) {
    align-items: center;
  }
`;
const IssueContainer = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
  padding-bottom: 80px;
  max-width: 800px;
  a {
    color: ${({ theme }) => theme.baseTextColor};
    &:hover {
      color: ${({ theme }) => theme.mainColor};
    }
  }
  h1 {
    @media screen and (max-width: 475px) {
      text-align: center;
    }
  }
  h2 {
    margin-top: 50px;
    color: ${({ theme }) => theme.mainColor};
    @media screen and (max-width: 475px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
  h3 {
    @media screen and (max-width: 475px) {
      text-align: center;
      font-size: 1em;
    }
  }
  p {
    margin-left: 8px;
    @media screen and (max-width: 475px) {
      font-size: 0.8rem;
      text-align: center;
    }
  }
`;

const Title = styled.h1`
  margin-bottom: 0;
  font-size: 3rem;
  color: ${({ theme }) => theme.mainColor};
`;
const Date = styled.div`
  padding-left: 3px;
`;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        number
      }
    }
  }
`;
