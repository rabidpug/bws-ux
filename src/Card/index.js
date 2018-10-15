import styled, { css, } from 'styled-components';

import scrollbar from '../styles/scrollbar';
import styles from '../styles';

const { get: { colours, }, } = styles;

const full = css`
  height: 100%;
  margin: 0;
  max-height: 100%;
  max-width: 100%;
  width: 100%;
`;

const Body = styled.div`
  display: block;
  flex: 1;
  flex-grow: 1;
  margin: 0;
  padding: 0.225rem;
  overflow: auto;
  white-space: pre-line;
  word-break: break-word;
  ${scrollbar};
  overflow-x: hidden;
`;
const Footer = styled.div`
  background-color: ${colours.white};
  box-shadow: 0 0.125rem 0.375rem 0 rgba(0, 0, 0, 0.2);
  padding: 0.225rem;
  height: 2rem;
  line-height: 1.55rem;
  font-size: 1.2rem;
`;
const Header = styled.div`
  background-color: ${colours.whiteL1};
  padding: 0.225rem;
  user-select: none;
  height: 3rem;
  line-height: 2.55rem;
  font-size: 2rem;
`;
const Card = styled.div`
  background-color: ${colours.whiteL2};
  box-shadow: 0 0.25rem 0.375rem 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  margin: 0.75rem 2rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  padding: 0;
  text-align: center;
  width: calc(100% - 4rem);
  min-height: 50%;
  max-height: calc(100% - 1.5rem);
  height: ${( { height, } ) => typeof height === 'undefined' ? 'auto' : height};
  @media (max-width: 767.98px) {
    ${full};
  }
  ${( { fullScreen, } ) => fullScreen && full};
`;

Card.Body = Body;

Card.Footer = Footer;

Card.Header = Header;

export default Card;
