import React from 'react';
import { categories } from '../categories';
import styled, { keyframes, css } from 'styled-components';

const letterChangeSpeed = 200;

export default class TitleBlock extends React.PureComponent {
  state = { currentWordId: 0, numOfChars: 0, isDelete: false };
  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  syncSetState = state =>
    new Promise(resolve =>
      this.setState({ ...this.state, ...state }, () => resolve())
    );

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
      <TerminalContainer>
        <TerminalMenu>
          <CloseButton />
          <TerminalName>abitnews</TerminalName>
        </TerminalMenu>
        <TerminalView>
          <TerminalLineHeader>a&nbsp;bit</TerminalLineHeader>
          <TerminalLineText>
            <InitLine>~/</InitLine>
            <Word isDelete={this.state.isDelete}>
              {categories[this.state.currentWordId].substring(
                0,
                this.state.numOfChars
              )}
            </Word>
          </TerminalLineText>
        </TerminalView>
      </TerminalContainer>
    );
  }
}

const TerminalName = styled.div`
  width: 100%;
  text-align: center;
  color: #fff;
`;
const TerminalView = styled.div`
  padding: 30px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const CloseButton = styled.div`
  height: 17px;
  width: 17px;
  border-radius: 50%;
  background-color: #ff5722;
  position: absolute;
`;
const TerminalMenu = styled.div`
  padding: 10px;
  height: 30px;
  display: flex;
  border-radius: 5px 5px 0 0;
  background-color: #000;
  justify-content: flex-start;
  align-items: center;
`;
const TerminalContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundContrast};
  width: 100%;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 6px 15px 0 rgba(36, 37, 38, 0.08);
`;
const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #607d8b }
`;

const Word = styled.b`
  border-right: 5px solid;
  border-left: none;
  padding-right: 10px;
  padding-left: 5px;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 auto;
  animation: ${blinkCaret} 1s step-end infinite;
  color: #fff;
  ${({ isDelete }) =>
    isDelete &&
    css`
      background-color: #607c8b;
      border-left: 5px solid;
      border-right: none;
      padding-left: 0;
    `};
`;

const TerminalLineHeader = styled.span`
  color: #a7fdeb;
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

const InitLine = styled.span`
  color: #b9f6c9;
`;

const TerminalLineText = styled.span`
  font-size: 4rem;
  letter-spacing: 0.25rem;
  margin: 0;
  padding: 0 10px;
  color: #fff;
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
