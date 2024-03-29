import profileOla from '../../../assets/images/avatar/ola.jpg';
import profileVamosComecar from '../../../assets/images/avatar/vamosComecar.jpg';
import profileError from '../../../assets/images/avatar/digitouClicouErrado.jpg';
import profileAguardando from '../../../assets/images/avatar/aguardando.jpg';
import profilePerguntando from '../../../assets/images/avatar/perguntando.jpg';
import profileSucesso from '../../../assets/images/avatar/cadastroFeitoComSucesso.jpg';

interface WelcomeData {
  id: number;
  title: string;
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
    profile: profileSucesso,
    textCard: 'Ótimo!',
    buttonText1: 'Avançar',
    buttonText2: 'Voltar',
    nextId: 7,
    prevId: 5,
  },
  {
    id: 7,
    title: 'Assistente, Ajuda aí',
    profile: profilePerguntando,
    textCard: 'Certo, por onde começo?',
    buttonText1: 'Avançar',
    buttonText2: 'Voltar',
    nextId: 8,
    prevId: 6,
  },
  {
    id: 8,
    title: 'Assistente, Ajuda aí',
    profile: profileOla,
    textCard:
      'Ah! Não me apresentei. Oi! Sou um app que te ensina a mexer em outros aplicativos!',
    buttonText1: 'Avançar',
    buttonText2: 'Voltar',
    nextId: 9,
    prevId: 7,
  },
  {
    id: 9,
    title: 'Assistente, Ajuda aí',
    profile: profileError,
    textCard: 'É, eu sei.... Meio irônico.',
    buttonText1: 'Avançar',
    buttonText2: 'Voltar',
    nextId: 10,
    prevId: 8,
  },
  {
    id: 10,
    title: 'Assistente, Ajuda aí',
    profile: profileVamosComecar,
    textCard: 'Então sem enrolação!',
    buttonText1: 'Avançar',
    buttonText2: 'Voltar',
    nextId: 11,
    prevId: 9,
  },
  {
    id: 11,
    title: 'Assistente, Ajuda aí',
    profile: profilePerguntando,
    textCard: 'Qual app você quer aprender?',
    buttonText1: 'Avançar',
    buttonText2: 'Voltar',
    nextId: 12,
    prevId: 10,
  },
];

export default welcomeData;
