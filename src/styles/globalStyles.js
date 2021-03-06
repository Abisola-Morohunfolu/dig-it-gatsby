import styled, { css } from "styled-components"

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;

  @media (min-height: 1024px) {
    max-width: 960px;
  }

  @media (min-height: 1216px) {
    max-width: 1152px;
  }

  @media (min-height: 1408px) {
    max-width: 1244px;
  }

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}
`

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}

  ${props =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `}

  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `}
`

export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background: ${props => props.theme.red};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  &.pointer {
    border: 2px solid ${props => props.theme.text} !important;
  }
  &.hovered {
    width: 35px;
    height: 35px;
    border: 2px solid ${props => props.theme.red};
    background: transparent !important;
  }
`
