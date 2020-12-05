import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  width: 45%;
  padding: 5px 0;
  margin-right: 8px;
`;

export const Title = styled.Text`
  position: absolute;
  color: #fff;
  font-family: 'RalewayRegular';
  font-size: 15px;
  text-align: center;
  margin-bottom: 10px;
  z-index: 1001;
`;

export const Block = styled.TouchableOpacity`
  position: relative;
  display: flex;
  align-items:center;
  justify-content: center;
  height: 230px;
  width: 100%;
  border-radius: 15px;
  background: #00000029;
`;

export const ImageTutorial = styled.Image`
  height: 100%;
  width: 100%;
  opacity: .9;
  border-radius: 15px;
`;
