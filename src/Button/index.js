import styled, { css, } from 'styled-components';

import styles from '../styles';

const { get: { colours, }, } = styles;

const variantStyle = ( { secondary, tertiary, active, } ) =>
  secondary
    ? css`
        color: ${colours.greyD2};
        background-color: ${colours.whiteL1};
        border-color: ${colours.greyL2};
        &:hover:not(:disabled) {
          color: ${colours.primaryL2};
          border-color: ${colours.primaryL2};
        }
        &:active:not(:disabled) {
          color: ${colours.primaryD1};
          border-color: ${colours.primaryD1};
        }
        ${active &&
          css`
            color: ${colours.primaryL1};
          `};
      `
    : tertiary
      ? css`
          color: ${colours.greyD2};
          border-radius: 0;
          border-color: transparent;
          background-color: transparent;
          &:after {
            display: block;
            content: '';
            border-bottom: 2px solid ${colours.primary};
            transform: scaleX(0);
            transition: transform 250ms ease-in-out;
          }
          &:hover:not(:disabled):after {
            transform: scaleX(1);
          }
          &:active:not(:disabled) {
            color: ${colours.primaryD1};
          }
          ${active &&
            css`
              color: ${colours.primaryD1};
            `};
        `
      : css`
          color: ${colours.whiteL1};
          background-color: ${colours.primary};
          border-color: ${colours.primary};
          &:hover:not(:disabled) {
            background-color: ${colours.primaryL1};
          }
          &:active:not(:disabled) {
            background-color: ${colours.primaryD1};
          }
          ${active &&
            css`
              background-color: ${colours.primaryD1};
            `};
        `;

const Button = styled.button`
  border-radius: 0.25rem;
  border: 1px solid;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  height: 2rem;
  line-height: ${( { as, } ) => !as || as === 'button' ? '1.5rem' : '2rem'};
  list-style: none;
  vertical-align: middle;
  margin: 0.5rem;
  outline: none;
  padding: 0 1rem;
  text-decoration: none;
  touch-action: manipulation;
  user-select: none;
  white-space: nowrap;
  box-sizing: border-box;
  position: relative;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover,
  :visited,
  :link,
  :active {
    text-decoration: none;
  }
  &:disabled {
    opacity: 0.7;
    cursor: wait;
  }
  ${variantStyle};
`;

export default Button;
