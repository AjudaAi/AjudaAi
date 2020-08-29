import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: inherit;
  font-weight: 300;
  font-size: 28px;
  color: ${(props => props.theme.colors.textPrimary)};
`;

export const SubTitle = styled.Text`
  margin-bottom: 32px;
  line-height: 22px;
  color: ${(props => props.theme.colors.textSecondary)};
  font-size: 18px; 
  margin-top: 8px;
  font-family: 'QuesatRegular';
`;
