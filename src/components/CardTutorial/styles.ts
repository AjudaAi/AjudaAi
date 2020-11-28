import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  width: 100%;
  padding: 5px 0;
`;

export const Title = styled.Text`
  position: absolute;
  top: 32%;
  left: 0;
  color: #fff;
  font-family: 'RalewayRegular';
  font-size: 15px;
  text-align: center;
  margin-bottom: 10px;
  z-index: 1001;
`;

export const Block = styled.TouchableOpacity`
  position: relative;
  height: 230px;
  width: 45%;
  border-radius: 15px;
  background: #00000029;
`;

export const ImageTutorial = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 15px;
`;
