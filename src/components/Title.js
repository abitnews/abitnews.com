import React from 'react';
import categories from '../categories';
import styled, { keyframes, css } from 'styled-components';

const letterChangeSpeed = 200;

export default class TitleBlock extends React.PureComponent {
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
        this.state.currentWordId < categories.length - 1
          ? this.state.currentWordId + 1
          : 0,
      numOfChars: 0,
      isDelete: false,
    });
    await this.sleep(300);
    this.innerId = setTimeout(
      this.changeWord,
      categories[this.state.currentWordId].length * letterChangeSpeed
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
      categories[0].length * letterChangeSpeed
    );
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutIdChangeWord);
    clearTimeout(this.innerId);
    clearInterval(this.timeoutIdChangeChar);
  }
  render() {
    return (
      <>
        <Title>a&nbsp;bit</Title>
        <Title>
          ~/
          <Word isDelete={this.state.isDelete}>
            {categories[this.state.currentWordId].substring(
              0,
              this.state.numOfChars
            )}
          </Word>
        </Title>
      </>
    );
  }
}

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #607d8b }
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
