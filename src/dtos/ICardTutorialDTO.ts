import { ImageSourcePropType } from 'react-native';

export default interface CardTutorialDTO {
  thumbnail: ImageSourcePropType;
  title: string;
  modulo: number;
  tutorial: 'whatsapp' | 'olx'| 'gmail' | 'telegram' | 'nubank' | 'drive';
}