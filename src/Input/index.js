import styled, { css, } from 'styled-components';

import React from 'react';
import styles from '../styles';

const { get: { colours, }, } = styles;

const lines = /\n\r|\n|\r/g;
const fontSize = ( { size, } ) => size === 'small' ? 0.75 : size === 'large' ? 1.5 : 1;
const getHeight = ( { value = '', fitContent, size, } ) =>
  typeof value === 'string' && value.match( lines ) && fitContent
    ? `${( value.match( lines ).length + 1 ) * fontSize( { size, } ) + 0.375}rem`
    : `${size === 'small' ? 1 : size === 'large' ? 1.75 : 1.25}rem`;
const InputElement = styled.input`
  resize: both;
  text-align: left;
  box-sizing: border-box;
  list-style: none;
  position: relative;
  display: inline-block;
  padding: 0.125rem 0.25rem 0rem 0.25rem;
  font-size: ${fontSize}rem;
  line-height: ${fontSize}rem;
  flex: 1;
  vertical-align: middle;
  min-height: ${( { rows = 1, size, } ) => `${rows * fontSize( { size, } ) + 0.5}rem`};
  height: ${getHeight};
  touch-action: manipulation;
  overflow: visible;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all 0.3s;
  margin: 0.25rem;
  &:hover,
  :focus {
    border-color: ${colours.primaryL1};
  }
  &:focus:not([type='checkbox']):not([type='radio']) {
    outline: 0;
    box-shadow: 0 0 0 2px ${colours.secondary};
  }
  &::placeholder {
    color: ${colours.grey};
  }
`;
const LabelEmbedded = styled.span`
  display: none;
`;
const LabelOutside = styled.span`
  position: inline;
  user-select: none;
  margin: 0 0.25rem;
`;
const LabelElement = styled.label`
  display: ${( { inline, } ) => inline ? 'inline' : 'block'};
  outline: 0;
  ${( { required, valid, } ) =>
    required && typeof valid !== 'boolean'
      ? css`
          &:after {
            content: '✱';
            font-size: 0.85rem;
            color: red;
            opacity: 0.7;
          }
        `
      : required && valid
        ? css`
            &:after {
              content: '✔';
              color: green;
              opacity: 0.7;
            }
          `
        : required
          ? css`
              &:after {
                content: '✘';
                color: red;
                opacity: 0.7;
              }
            `
          : null};
`;
const Input = ( { label, position, required, valid, inline, ...props } ) =>
  position ? (
    <LabelElement inline={ inline } required={ required } valid={ valid }>
      {position === 'right' && <LabelOutside>{label}</LabelOutside>}
      <InputElement required={ required } { ...props } />
      {position === 'left' && <LabelOutside>{label}</LabelOutside>}
    </LabelElement>
  ) : (
    <LabelElement inline={ inline } required={ required } valid={ valid }>
      <LabelEmbedded>{label}</LabelEmbedded>
      <InputElement placeholder={ label } required={ required } { ...props } />
    </LabelElement>
  );

export default Input;
