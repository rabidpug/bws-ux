import styled from 'styled-components';
import styles from '../styles';

const { get: { colours, }, } = styles;

const Pop = styled.div`
  position: relative;
  display: inline;
  &:after {
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 1%;
    height: 1%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 0 ${colours.primary};
    transition: box-shadow 0s;
  }
  &:hover:after {
    box-shadow: 0 0 0 ${( { size, } ) => size || 3}rem rgba(255, 150, 44, 0);
    transition: box-shadow 0.4s ease-in-out;
  }
`;

export default Pop;
