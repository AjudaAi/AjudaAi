// Tutorials
import tutorial1Image1 from '../../../../assets/tutorials/whatsapp/tutorial1/slide1.1.png';
import tutorial1Image2 from '../../../../assets/tutorials/whatsapp/tutorial1/slide1.2.png';
import tutorial1Image3 from '../../../../assets/tutorials/whatsapp/tutorial1/slide1.3.png';
import tutorial1Image4 from '../../../../assets/tutorials/whatsapp/tutorial1/slide1.4.png';
import tutorial1Image5 from '../../../../assets/tutorials/whatsapp/tutorial1/slide1.5.png';

import tutorial2Image1 from '../../../../assets/tutorials/whatsapp/tutorial2/slide2.1.png';
import tutorial2Image2 from '../../../../assets/tutorials/whatsapp/tutorial2/slide2.2.png';
import tutorial2Image3 from '../../../../assets/tutorials/whatsapp/tutorial2/slide2.3.png';

import tutorial3Image1 from '../../../../assets/tutorials/whatsapp/tutorial3/slide3.1.png';
import tutorial3Image2 from '../../../../assets/tutorials/whatsapp/tutorial3/slide3.2.png';
import tutorial3Image3 from '../../../../assets/tutorials/whatsapp/tutorial3/slide3.3.png';
import tutorial3Image4 from '../../../../assets/tutorials/whatsapp/tutorial3/slide3.4.png';
import tutorial3Image5 from '../../../../assets/tutorials/whatsapp/tutorial3/slide3.5.png';
import tutorial3Image6 from '../../../../assets/tutorials/whatsapp/tutorial3/slide3.6.png';

import tutorial4Image1 from '../../../../assets/tutorials/whatsapp/tutorial4/slide4.1.png';
import tutorial4Image2 from '../../../../assets/tutorials/whatsapp/tutorial4/slide4.2.png';
import tutorial4Image3 from '../../../../assets/tutorials/whatsapp/tutorial4/slide4.3.png';
import tutorial4Image4 from '../../../../assets/tutorials/whatsapp/tutorial4/slide4.4.png';
import tutorial4Image5 from '../../../../assets/tutorials/whatsapp/tutorial4/slide4.5.png';
import tutorial4Image6 from '../../../../assets/tutorials/whatsapp/tutorial4/slide4.6.png';
import tutorial4Image7 from '../../../../assets/tutorials/whatsapp/tutorial4/slide4.7.png';

import CardTutorial from '../../../../dtos/ICardTutorialDTO';
import Tutorials from '../../../../dtos/ITutorialsDTO';


export const t1: Tutorials[] = [
  { 
    id: 0,
    modulo: 1,
    image: tutorial1Image1,
  },
  { 
    id: 1,
    modulo: 1,
    image: tutorial1Image2,
  },
  { 
    id: 2,
    modulo: 1,
    image: tutorial1Image3,
  },
  { 
    id: 3,
    modulo: 1,
    image: tutorial1Image4,
  },
  { 
    id: 4,
    modulo: 1,
    image: tutorial1Image5,
  },
];

export const t2: Tutorials[] = [
  { 
    id: 0,
    modulo: 2,
    image: tutorial2Image1,
  },
  { 
    id: 1,
    modulo: 2,
    image: tutorial2Image2,
  },
  { 
    id: 2,
    modulo: 2,
    image: tutorial2Image3,
  },
];

export const t3: Tutorials[] = [
  { 
    id: 0,
    modulo: 3,
    image: tutorial3Image1,
  },
  { 
    id: 1,
    modulo: 3,
    image: tutorial3Image2,
  },
  { 
    id: 2,
    modulo: 3,
    image: tutorial3Image3,
  },
  { 
    id: 3,
    modulo: 3,
    image: tutorial3Image4,
  },
  { 
    id: 4,
    modulo: 3,
    image: tutorial3Image5,
  },
  { 
    id: 5,
    modulo: 3,
    image: tutorial3Image6,
  },
];

export const t4: Tutorials[] = [
  { 
    id: 0,
    modulo: 4,
    image: tutorial4Image1,
  },
  { 
    id: 1,
    modulo: 4,
    image: tutorial4Image2,
  },
  { 
    id: 2,
    modulo: 4,
    image: tutorial4Image3,
  },
  { 
    id: 3,
    modulo: 4,
    image: tutorial4Image4,
  },
  { 
    id: 4,
    modulo: 4,
    image: tutorial4Image5,
  },
  { 
    id: 5,
    modulo: 4,
    image: tutorial4Image6,
  },
  { 
    id: 6,
    modulo: 4,
    image: tutorial4Image7,
  },
];

export const thumbnailTutorials: CardTutorial[] = [
  {
    thumbnail: tutorial1Image1,
    title: 'Backups',
    modulo: 1,
  },
  {
    thumbnail: tutorial2Image1,
    title: `Fixar conversas`,
    modulo: 2,
  },
  {
    thumbnail: tutorial3Image1,
    title: 'Formatação de texto',
    modulo: 3,
  },
  {
    thumbnail: tutorial4Image1,
    title: 'Verificação de 2 etapas',
    modulo: 4,
  },
];