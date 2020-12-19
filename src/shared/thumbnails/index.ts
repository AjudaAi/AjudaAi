import CardTutorial from '../../dtos/ICardTutorialDTO';

/*** Whatsapp ***/
import Wtutorial1Image1 from '../../assets/tutorials/whatsapp/tutorial1/slide1.1.png';
import Wtutorial2Image1 from '../../assets/tutorials/whatsapp/tutorial2/slide2.1.png';
import Wtutorial3Image1 from '../../assets/tutorials/whatsapp/tutorial3/slide3.1.png';
import Wtutorial4Image1 from '../../assets/tutorials/whatsapp/tutorial4/slide4.1.png';

/*** Gmail ***/
import Gtutorial1Image1 from '../../assets/tutorials/gmail/tutorial1/slide1.1.png';
import Gtutorial2Image1 from '../../assets/tutorials/gmail/tutorial2/slide2.1.png';
import Gtutorial3Image1 from '../../assets/tutorials/gmail/tutorial3/slide3.1.png';

/*** Telegram ***/
import Ttutorial1Image1 from '../../assets/tutorials/telegram/tutorial1/slide1.1.png';
import Ttutorial2Image1 from '../../assets/tutorials/telegram/tutorial2/slide2.1.png';
import Ttutorial3Image1 from '../../assets/tutorials/telegram/tutorial3/slide3.1.png';

/*** Google Drive ***/
import GDtutorial1Image1 from '../../assets/tutorials/googleDrive/tutorial1/slide1.1.png';
import GDtutorial2Image1 from '../../assets/tutorials/googleDrive/tutorial2/slide2.1.png';
import GDtutorial3Image1 from '../../assets/tutorials/googleDrive/tutorial3/slide3.1.png';

/*** Nubank ***/
import Ntutorial1Image1 from '../../assets/tutorials/nubank/tutorial1/slide1.1.png';
import Ntutorial2Image1 from '../../assets/tutorials/nubank/tutorial2/slide2.1.png';
import Ntutorial3Image1 from '../../assets/tutorials/nubank/tutorial3/slide3.1.png';


/*** OLX ***/
import OLXtutorial1Image1 from '../../assets/tutorials/olx/tutorial1/slide1.1.png';
import OLXtutorial2Image1 from '../../assets/tutorials/olx/tutorial2/slide2.1.png';


const thumbnailTutorials: CardTutorial[] = [
  /*** WHATSAPP ***/
  {
    thumbnail: Wtutorial1Image1,
    title: 'Proteger contra hacker de contas',
    tutorial: 'whatsapp',
    modulo: 1,
  },
  {
    thumbnail: Wtutorial2Image1,
    title: 'Usar negrito, itálico e sublinhado',
    tutorial: 'whatsapp',
    modulo: 2,
  },
  {
    thumbnail: Wtutorial3Image1,
    title: 'Recuperar suas mensagens',
    tutorial: 'whatsapp',
    modulo: 3,
  },
  {
    thumbnail: Wtutorial4Image1,
    title: 'Fixar suas conversas',
    tutorial: 'whatsapp',
    modulo: 4,
  },

  /*** Gmail ***/
  {
    thumbnail: Gtutorial1Image1,
    title: 'Baixar uma fatura',
    tutorial: 'gmail',
    modulo: 1,
  },
  {
    thumbnail: Gtutorial2Image1,
    title: 'Enviar um currículo',
    tutorial: 'gmail',
    modulo: 2,
  },
  {
    thumbnail: Gtutorial3Image1,
    title: 'Encaminhar e-mail',
    tutorial: 'gmail',
    modulo: 3,
  },
  /*** Telegram ***/
  {
    thumbnail: Ttutorial1Image1,
    title: 'Criar sua conta',
    tutorial: 'telegram',
    modulo: 1,
  },
  {
    thumbnail: Ttutorial2Image1,
    title: 'Criar um grupo',
    tutorial: 'telegram',
    modulo: 2,
  },
  {
    thumbnail: Ttutorial3Image1,
    title: 'Chat Secreto',
    tutorial: 'telegram',
    modulo: 3,
  },
  /*** Nubank ***/
  {
    thumbnail: Ntutorial1Image1,
    title: 'Receber dinheiro',
    tutorial: 'nubank',
    modulo: 1,
  },
  {
    thumbnail: Ntutorial2Image1,
    title: 'Pagar uma conta',
    tutorial: 'nubank',
    modulo: 2,
  },
  {
    thumbnail: Ntutorial3Image1,
    title: 'Solicitar aumento de limite',
    tutorial: 'nubank',
    modulo: 3,
  },
  /*** OLX ***/
  {
    thumbnail: OLXtutorial1Image1,
    title: 'Como vender',
    tutorial: 'olx',
    modulo: 1,
  },
  {
    thumbnail: OLXtutorial2Image1,
    title: 'Ver suas conversas',
    tutorial: 'olx',
    modulo: 2,
  },
  /*** Google Drive ***/
  {
    thumbnail: GDtutorial1Image1,
    title: 'Acessando e criando uma pasta na nuvem',
    tutorial: 'drive',
    modulo: 1,
  },
  {
    thumbnail: GDtutorial2Image1,
    title: 'baixando uma foto da nuvem',
    tutorial: 'drive',
    modulo: 2,
  },
  {
    thumbnail: GDtutorial3Image1,
    title: 'subindo uma foto da nuvem',
    tutorial: 'drive',
    modulo: 3,
  },
];

export default thumbnailTutorials;