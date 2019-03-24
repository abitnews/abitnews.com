import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import SEO from 'components/SEO';

export default function Issues({ data }) {
  const numberOfIssues = data.allMarkdownRemark.totalCount;
  const issues = data.allMarkdownRemark.edges;

  return (
    <Container>
      <SEO title={'All issues'} />
      <PageTitle>All issues ({numberOfIssues})</PageTitle>
      <IssueList>
        {issues.map(({ node }) => (
          <Issue key={node.id}>
            <IssueTitle>
              ~/
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </IssueTitle>
            <div style={{ marginLeft: '40px' }}>
              <IssueDate>{node.frontmatter.date}</IssueDate>
              <IssueDescription>
                {node.frontmatter.description}{' '}
                <Link to={node.fields.slug}>and more...</Link>
              </IssueDescription>
            </div>
          </Issue>
        ))}
      </IssueList>
    </Container>
  );
}

const IssueDescription = styled.p`
  font-size: 0.9em;
  @media screen and (max-width: 475px) {
    font-size: 0.8rem;
  }
`;
const IssueTitle = styled.h2`
  display: flex;
  align-items: center;
  a {
    margin-left: 10px;
    color: ${({ theme }) => theme.baseTextColor};
    &:hover {
      color: ${({ theme }) => theme.mainColor};
    }
  }
`;
const IssueDate = styled.div`
  font-size: 0.8em;
  font-weight: bold;
`;
const IssueList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Issue = styled.li`
  /* display: inline-flex; */
  /* align-items: center; */
`;

const PageTitle = styled.h1``;
const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 800px;
`;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
