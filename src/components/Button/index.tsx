import React from 'react';

import { TextButton, Touchable } from './styles';

export interface Props {
  text: string;
  action(): void;
} 

const Button: React.FC<Props> = ({ action, text }) => {
  return (
    <Touchable>
        <TextButton onPress={action}>{text}</TextButton>
    </Touchable>
  );
}

export default Button;