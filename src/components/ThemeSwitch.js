import React from 'react';
import styled, { css } from 'styled-components';
import Moon from 'components/icons/Moon';

export default function ThemeSwitch({ currentTheme, onChange }) {
  return (
    <SwitchContainer
      onClick={onChange}
      role="button"
      tabIndex={0}
      isDark={currentTheme === 'dark'}
    >
      <Circle isDark={currentTheme === 'dark'}>
        <MoonIcon />
      </Circle>
    </SwitchContainer>
  );
}

const circleSize = 22;
const circleBorder = 2;
const switchWidth = 60;
const margin = 3;

const MoonIcon = styled(Moon)`
  fill: #fff;
  stroke: #fff;
  opacity: 0;
  transition: 0.3s;
`;
const Circle = styled.div`
  height: ${circleSize}px;
  width: ${circleSize}px;
  border: ${circleBorder}px solid #f9a825;
  background-color: #ffeb3b;
  border-radius: 100%;
  margin: ${margin}px;
  position: relative;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  ${({ isDark }) =>
    isDark &&
    css`
      transition: 0.3s;
      border-color: #fafafa;
      background-color: #01579b;
      transform: translateX(
        ${switchWidth - circleSize - circleBorder - margin}px
      );
      ${MoonIcon} {
        opacity: 1;
        transition: 0.3s;
      }
    `};
`;

const SwitchContainer = styled.div`
  display: inline-flex;
  width: ${switchWidth}px;
  overflow: hidden;
  border-radius: 100px;
  align-items: center;
  background-color: #80deea;
  flex-direction: row;
  transition: 0.3s;
  ${({ isDark }) =>
    isDark &&
    css`
      background-color: #536dfe;
    `};

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
