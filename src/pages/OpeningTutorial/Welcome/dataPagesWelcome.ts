import profileOla from '../../../assets/images/ola.png';
import profileVamosComecar from '../../../assets/images/vamosComecar.png';
import profileError from '../../../assets/images/digitouClicouErrado.png';
import profileAguardando from '../../../assets/images/aguardando.png';
import profilePerguntando from '../../../assets/images/perguntando.png';
import profileSucesso from '../../../assets/images/cadastroFeitoComSucesso.png';

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
    textCard: 'Ótimo!',
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
    textCard: 'Certo, por onde começo?',
    buttonText1: 'Avançar',
    buttonText2: 'Voltar',
    nextId: 8,
    prevId: 6,
  },
  {
    id: 8,
    title: 'Assistente, Ajuda aí',
    subtitle: 'Apoio por voz',
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
    subtitle: 'Apoio por voz',
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
    subtitle: 'Apoio por voz',
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
    subtitle: 'Apoio por voz',
    profile: profilePerguntando,
    textCard: 'Qual app você quer aprender?',
    buttonText1: 'Avançar',
    buttonText2: 'Voltar',
    nextId: 12,
    prevId: 10,
  },
];

export default welcomeData;
