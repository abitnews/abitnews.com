import React from 'react';
import styled, { keyframes } from 'styled-components';

const LineLoading = () => (
  <Wrapper>
    <Progress>
      <Indeterminate />
    </Progress>
  </Wrapper>
);

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
`;
const Progress = styled.div`
  position: relative;
  height: 3px;
  display: block;
  width: 100%;
  background-color: #acece6;
  overflow: hidden;
`;

const indeterminate = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`;

const indeterminateShort = keyframes`
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
`;

const Indeterminate = styled.div`
  background-color: ${props => props.theme.mainColor};
  &::before {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: ${indeterminate} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395)
      infinite;
  }
  &::after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    animation: ${indeterminateShort} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1)
      infinite;
    animation-delay: 1.15s;
  }
`;

export default LineLoading;
