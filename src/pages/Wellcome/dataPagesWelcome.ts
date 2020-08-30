import profileOla from '../../assets/ola.png';
import profileVamosComecar from '../../assets/vamosComecar.png';
import profileError from '../../assets/digitouClicouErrado.png';
import profileAguardando from '../../assets/aguardando.png';
import profilePerguntando from '../../assets/perguntando.png';
import profileSucesso from '../../assets/cadastroFeitoComSucesso.png';

interface WelcomeData {
  id: number;
  title: string;
  subtitle: string;
  profile: '*.png';
  textCard: string | null;
  buttonText1: string | null;
  buttonText2: string | null;
  nextId: number;
  prevId: number | null;
}

const welcomeData: WelcomeData[] = [
  {
    id: 0,
    title: 'Assistente, Ajuda aí',
    subtitle: 'Apoio por voz',
    profile: profileOla,
    textCard: null,
    buttonText1: null,
    buttonText2: null,
    nextId: 1,
    prevId: null,
  },
  {
    id: 2,
    title: 'Assistente, Ajuda aí',
    subtitle: 'Apoio por voz',
    profile: profileVamosComecar,
    textCard: 'Olá, tudo bem? Seja bem-vindo. Estou aqui para te ajudar!',
    buttonText1: null,
    buttonText2: null,
    nextId: 3,
    prevId: 1,
  },
  {
    id: 3,
    title: 'Assistente, Ajuda aí',
    subtitle: 'Apoio por voz',
    profile: profileError,
    textCard: 'Para me responder, basta tocar nos botões brancos abaixo.',
    buttonText1: null,
    buttonText2: null,
    nextId: 4,
    prevId: 2,
  },
  {
    id: 4,
    title: 'Assistente, Ajuda aí',
    subtitle: 'Apoio por voz',
    profile: profileOla,
    textCard: 'Vamos lá, experimente!',
    buttonText1: 'Clique Aqui',
    buttonText2: null,
    nextId: 5,
    prevId: 3,
  },
  {
    id: 5,
    title: 'Assistente, Ajuda aí',
    subtitle: 'Apoio por voz',
    profile: profilePerguntando,
    textCard: 'Vamos lá, experimente!',
    buttonText1: '👍️',
    buttonText2: null,
    nextId: 6,
    prevId: 4,
  },
  {
    id: 6,
    title: 'Assistente, Ajuda aí',
    subtitle: 'Apoio por voz',
    profile: profileError,
    textCard:
      'Não, não é ai, tente tocar no botão branco, no meio da sombra, com aquele joinha no meio!',
    buttonText1: null,
    buttonText2: null,
    nextId: 7,
    prevId: 5,
  },
];

export default welcomeData;
