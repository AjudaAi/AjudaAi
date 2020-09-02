import profileOla from '../../assets/images/ola.png';
import profileVamosComecar from '../../assets/images/vamosComecar.png';
import profileError from '../../assets/images/digitouClicouErrado.png';
import profileAguardando from '../../assets/images/aguardando.png';
import profilePerguntando from '../../assets/images/perguntando.png';
import profileSucesso from '../../assets/images/cadastroFeitoComSucesso.png';

interface WelcomeData {
  id: number;
  title: string;
  subtitle: string;
  profile: '*.png';
  textCard: string | null;
  buttonText1: string | null;
  buttonText2: string | null;
  nextId: number | null;
  prevId: number | null;
}

const welcomeData: WelcomeData[] = [
  {
    id: 0,
    title: 'Assistente, Ajuda aí',
    subtitle: 'Apoio por voz',
    profile: profileOla,
    textCard: null,
    buttonText1: 'Avançar',
    buttonText2: null,
    nextId: 1,
    prevId: 0,
  },
  {
    id: 1,
    title: 'Assistente, Ajuda aí',
    subtitle: 'Apoio por voz',
    profile: profileVamosComecar,
    textCard: 'Olá, tudo bem? Seja bem-vindo. Estou aqui para te ajudar!',
    buttonText1: 'Avançar',
    buttonText2: 'Voltar',
    nextId: 2,
    prevId: 0,
  },
  {
    id: 2,
    title: 'Assistente, Ajuda aí',
    subtitle: 'Apoio por voz',
    profile: profileError,
    textCard: 'Para me responder, basta tocar nos botões brancos abaixo.',
    buttonText1: 'Avançar',
    buttonText2: 'Voltar',
    nextId: 3,
    prevId: 1,
  },
  {
    id: 3,
    title: 'Assistente, Ajuda aí',
    subtitle: 'Apoio por voz',
    profile: profileOla,
    textCard: 'Vamos lá, experimente!',
    buttonText1: 'Clique Aqui',
    buttonText2: null,
    nextId: 4,
    prevId: 2,
  },
  {
    id: 4,
    title: 'Assistente, Ajuda aí',
    subtitle: 'Apoio por voz',
    profile: profilePerguntando,
    textCard: 'Vamos lá, experimente!',
    buttonText1: '👍️',
    buttonText2: null,
    nextId: 5,
    prevId: 3,
  },
  {
    id: 5,
    title: 'Assistente, Ajuda aí',
    subtitle: 'Apoio por voz',
    profile: profileError,
    textCard:
      'Não, não é ai, tente tocar no botão branco, no meio da sombra, com aquele joinha no meio!',
    buttonText1: 'Avançar',
    buttonText2: 'Voltar',
    nextId: 6,
    prevId: 4,
  },
  {
    id: 6,
    title: 'Assistente, Ajuda aí',
    subtitle: 'Apoio por voz',
    profile: profileSucesso,
    textCard:
      'Ótimo!',
    buttonText1: 'Avançar',
    buttonText2: 'Voltar',
    nextId: 7,
    prevId: 5,
  },
  {
    id: 7,
    title: 'Assistente, Ajuda aí',
    subtitle: 'Apoio por voz',
    profile: profilePerguntando,
    textCard:
      'Tá, vamos lá! Quem precisa da minha ajuda, você ou seu familiar!',
    buttonText1: 'Eu mesmo!',
    buttonText2: 'Um familiar!',
    nextId: null,
    prevId: null,
  },
];

export default welcomeData;
