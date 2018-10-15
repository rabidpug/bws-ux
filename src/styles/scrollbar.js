import { css, } from 'styled-components';
const scrollbar = css`
  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar {
    background-color: #f5f5f5;
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;

export default scrollbar;
