import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Layout from 'components/layout';

export default function Issues({ data }) {
  console.log(data);
  const numberOfIssues = data.allMarkdownRemark.totalCount;
  const issues = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Container>
        <Title>Issues ({numberOfIssues})</Title>
        <IssueList>
          {issues.map(({ node }) => (
            <Issue key={node.id}>
              <IssueTitle>
                ~/
                <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
              </IssueTitle>
              <IssueDate>{node.frontmatter.date}</IssueDate>
            </Issue>
          ))}
        </IssueList>
      </Container>
    </Layout>
  );
}

const IssueTitle = styled.h2`
  a {
    margin-left: 10px;
    color: ${({ theme }) => theme.baseTextColor};
    &:hover {
      color: ${({ theme }) => theme.mainColor};
    }
  }
`;
const IssueDate = styled.div`
  font-size: 0.9em;
  font-weight: bold;
  margin-left: 50px;
`;
const IssueList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Issue = styled.li`
  display: inline-flex;
  align-items: center;
`;

const Title = styled.h1``;
const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 800px;
`;
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
`;
