import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import Layout from '../components/layout';
import SubscriptionForm from '../components/SubscriptionForm';

const words = [
  'Programming',
  'AI',
  'Machine learning',
  'UX/UI',
  'Libraries',
  'Frameworks',
  'Startups',
  'Blockchain',
];
const letterChangeSpeed = 200;

export default class IndexPage extends React.PureComponent {
  state = { currentWordId: 0, numOfChars: 0, isDelete: false };

  sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  syncSetState = state => {
    return new Promise(resolve =>
      this.setState({ ...this.state, ...state }, () => resolve())
    );
  };
  changeWord = async () => {
    await this.sleep(500);
    await this.syncSetState({
      isDelete: true,
    });
    await this.sleep(1000);
    await this.syncSetState({
      currentWordId:
        this.state.currentWordId < words.length - 1
          ? this.state.currentWordId + 1
          : 0,
      numOfChars: 0,
      isDelete: false,
    });
    await this.sleep(300);
    this.innerId = setTimeout(
      this.changeWord,
      words[this.state.currentWordId].length * letterChangeSpeed
    );
  };
  componentDidMount() {
    this.timeoutIdChangeChar = setInterval(
      () =>
        this.setState({
          numOfChars: this.state.numOfChars + 1,
        }),
      letterChangeSpeed
    );
    this.timeoutIdChangeWord = setTimeout(
      this.changeWord,
      words[0].length * letterChangeSpeed
    );
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutIdChangeWord);
    clearTimeout(this.innerId);
    clearInterval(this.timeoutIdChangeChar);
  }
  handleSubscription = email => {
    console.log('handle');
    console.log(email);
  };
  render() {
    return (
      <Layout>
        <HomePage>
          <Content>
            <TitleContainer>
              <Title>A&nbsp;bit</Title>
              <Title>
                ~/
                <Word isDelete={this.state.isDelete}>
                  {words[this.state.currentWordId].substring(
                    0,
                    this.state.numOfChars
                  )}
                </Word>
                {/* <Word isDelete={this.state.isDelete}>Machine learning</Word> */}
              </Title>
            </TitleContainer>
            <div>
              <SubTitle>Technology newsletter</SubTitle>
              <SubscriptionForm handleSubscription={this.handleSubscription} />
            </div>

            <div id="mc_embed_signup">
              <form
                action="https://abitcompany.us17.list-manage.com/subscribe/post?u=0fefed5f87ff20de347b84135&amp;id=f437b31b87"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <div id="mc_embed_signup_scroll">
                  <div>
                    <label htmlFor="mce-EMAIL">Email Address</label>
                    <input
                      type="email"
                      value={this.state.value}
                      onChange={event =>
                        this.setState({ email: event.target.value })
                      }
                      name="EMAIL"
                      id="mce-EMAIL"
                    />
                  </div>
                  <div id="mce-responses">
                    <div id="mce-error-response" style={{ display: 'none' }} />
                    <div
                      id="mce-success-response"
                      style={{ display: 'none' }}
                    />
                  </div>
                  <div
                    style={{ position: 'absolute', left: '-5000px' }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_0fefed5f87ff20de347b84135_f437b31b87"
                      tabIndex="-1"
                      value={this.state.valueHidden}
                      onChange={event =>
                        this.setState({ email: event.target.valueHidden })
                      }
                    />
                  </div>
                  <div>
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                    />
                  </div>
                </div>
              </form>
            </div>
          </Content>
        </HomePage>
      </Layout>
    );
  }
}
const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #607d8b }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;
const Word = styled.b`
  border-right: 5px solid;
  /* border-right: 5px solid transparent; */
  border-left: none;
  padding-right: 10px;
  padding-left: 5px;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 auto;
  animation: ${blinkCaret} 1s step-end infinite;
  color: ${props => props.theme.mainColor};
  ${props =>
    props.isDelete &&
    css`
      background-color: #cfd8dc;
      border-left: 5px solid;
      border-right: none;
      padding-left: 0;
    `};
`;

// ${typing} 2s steps(10, start)

const Title = styled.h1`
  font-size: 4rem;
  letter-spacing: 0.25rem;
  margin: 0;
  padding: 0 10px;
  @media screen and (max-width: 900px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 650px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 575px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 475px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1.2rem;
  }
`;
const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  @media screen and (max-width: 475px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
const HomePage = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 780px;
`;
