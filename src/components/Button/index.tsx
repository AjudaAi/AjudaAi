import React from 'react';

import { TextButton, Touchable } from './styles';

interface Props {
  onPress: (event: any) => void
}

const Button: React.FC<Props> = ({ onPress, children }) => {
  return (
    <Touchable onPress={onPress}>
      <TextButton>{children}</TextButton>
    </Touchable>
  );
}

export default Button;
