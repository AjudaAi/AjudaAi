import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  padding: 5px 0;
  margin-right: 8px;
`;

export const Title = styled.Text`
  position: absolute;
  top: 45%;
  color: #fefefe;
  font-family: 'RalewayRegular';
  font-size: 15px;
  text-align: center;
  z-index:1001;
  fontWeight: bold;
`;

export const Block = styled.TouchableOpacity`
  position: relative;
  align-items:center;
  justify-content: center;
  height: 230px;
  width: 150px;
  border-radius: 15px;
  background: #00000029;
`;

export const ImageTutorial = styled.Image`
  height: 100%;
  width: 100%;
  opacity: .9;
  border-radius: 15px;
`;
