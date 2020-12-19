import { ImageSourcePropType } from 'react-native';

export default interface ITutorialsDTO {
  id: number;
  tutorial: 'whatsapp' | 'olx'| 'gmail' | 'telegram' | 'nubank' | 'drive';
  image: ImageSourcePropType;
  modulo: number;
}