import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import NewsItem from '../components/NewsItem';
import LineLoading from '../components/LineLoading';

class NewsPage extends React.Component {
  state = { isLoading: true, news: [], error: false };
  async componentDidMount() {
    fetch('/api/news')
      .then(res => {
        res.json().then(data => {
          console.log(data);
          this.setState({
            news: data.news,
          });
        });
      })
      .catch(() => this.setState({ error: true }))
      .finally(() => this.setState({ isLoading: false }));
  }
  render() {
    return (
      <Layout>
        <NewsPageWrapper>
          {this.state.isLoading ? <LineLoading /> : null}
          <Title>Last issue</Title>
          <TLDR>TLDR</TLDR>
          {!this.state.isLoading ? (
            <NewsContainer>
              {this.state.news.map(news => (
                <NewsItem key={news.url} news={news} />
              ))}
            </NewsContainer>
          ) : null}
        </NewsPageWrapper>
      </Layout>
    );
  }
}

const TLDR = styled.p`
  border-left: 3px solid ${props => props.theme.mainColor};
  padding: 10px;
`;
const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1``;

const NewsPageWrapper = styled.div`
  max-width: 780px;
  margin: auto;
  padding-top: 30px;
`;
export default NewsPage;
