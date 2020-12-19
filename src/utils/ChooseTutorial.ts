import { t1, t2, t3, t4 } from '../shared/modules/whatsapp/content';

interface Tutorial {
  tutorial: 'whatsapp' | 'olx'| 'gmail' | 'telegram' | 'nubank' | 'drive';
  modulo: Number;
}

export function chooseTutorial({ tutorial, modulo }: Tutorial) {
  if(tutorial === 'whatsapp') {    
    
    if(modulo == 1) {
      return t1;
    }
    
    if(modulo === 2) {
      return t2;
    }
    
    if(modulo === 3) {
      return t3;
    }

    if(modulo === 4) {
      return t4;
    }
  }
  
  if(tutorial === 'gmail') {
    // TODO
  }
  
  if(tutorial === 'olx') {
    // TODO
  }

  if(tutorial === 'nubank') {
   // TODO
  }

  if(tutorial === 'drive') {
    // TODO
  }

  if(tutorial === 'telegram') {
    // TODO
  }
  
}