import styled from 'styled-components/native';

export const Container = styled.View`
    border: 2px solid ${(props => props.theme.colors.textPrimary)};
    height: 50px;
    width: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 200px;
    position: relative;
    right: 0px;
    margin: -55px 0 35px auto;
`;

export const ButtonIcon = styled.Text`
    color: ${props => props.theme.colors.textPrimary};
`;