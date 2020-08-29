import styled from 'styled-components/native';
import { keyframes } from 'styled-components';

const type = keyframes`
  0% {
    width: 0ch;
  }
  100% {
    width: 22ch;
  }
`;

export const View = styled.View`
  background: #eaeaeaaa;
  justify-content: center;
  align-items: center;
`;

export const TextAnimated = styled.Text`
  white-space: nowrap;
  animation: ${type} 3s steps(22);
  overflow: hidden;
`;
