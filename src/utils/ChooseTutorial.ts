import { tw1, tw2, tw3, tw4 } from '../shared/modules/whatsapp/content';
import { tg1, tg2, tg3 } from '../shared/modules/gmail/content';
import { tgd1, tgd2, tgd3 } from '../shared/modules/googleDrive/content';
import { tn1, tn2, tn3 } from '../shared/modules/nubank/content';
import { to1, to2 } from '../shared/modules/olx/content';
import { tt1, tt2, tt3 } from '../shared/modules/telegram/content';

interface Tutorial {
  tutorial: 'whatsapp' | 'olx' | 'gmail' | 'telegram' | 'nubank' | 'drive';
  modulo: number;
}

export function chooseTutorial({ tutorial, modulo }: Tutorial) {
  if (tutorial === 'whatsapp') {
    if (modulo === 1) {
      return tw1;
    }

    if (modulo === 2) {
      return tw2;
    }

    if (modulo === 3) {
      return tw3;
    }

    if (modulo === 4) {
      return tw4;
    }
  }

  if (tutorial === 'gmail') {
    if (modulo === 1) {
      return tg1;
    }

    if (modulo === 2) {
      return tg2;
    }

    if (modulo === 3) {
      return tg3;
    }
  }

  if (tutorial === 'olx') {
    if (modulo === 1) {
      return to1;
    }

    if (modulo === 2) {
      return to2;
    }
  }

  if (tutorial === 'nubank') {
    if (modulo === 1) {
      return tn1;
    }

    if (modulo === 2) {
      return tn2;
    }

    if (modulo === 3) {
      return tn3;
    }
  }

  if (tutorial === 'drive') {
    if (modulo === 1) {
      return tgd1;
    }

    if (modulo === 2) {
      return tgd2;
    }

    if (modulo === 3) {
      return tgd3;
    }
  }

  if (tutorial === 'telegram') {
    if (modulo === 1) {
      return tt1;
    }

    if (modulo === 2) {
      return tt2;
    }

    if (modulo === 3) {
      return tt3;
    }
  }
}
