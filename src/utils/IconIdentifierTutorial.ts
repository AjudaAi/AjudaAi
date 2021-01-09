import imageGmail from '../assets/images/logoTutorial/gmail.png';
import imageNubank from '../assets/images/logoTutorial/nubank.png';
import imageTelegram from '../assets/images/logoTutorial/telegram.png';
import imageOlx from '../assets/images/logoTutorial/olx.png';
import imageWhatsapp from '../assets/images/logoTutorial/whatsapp.png';
import imageGoogleDrive from '../assets/images/logoTutorial/google-drive.png';

export function IconIdentifierTutorial(name: string) {
  if(!name) throw new Error('Icon not found');
 
  if(name.toLocaleLowerCase() === 'whatsapp') return imageWhatsapp;

  if(name.toLocaleLowerCase() === 'olx') return imageOlx;
  
  if(name.toLocaleLowerCase() === 'gmail') return imageGmail;
  
  if(name.toLocaleLowerCase() === 'telegram') return imageTelegram;
  
  if(name.toLocaleLowerCase() === 'nubank') return imageNubank;
  
  if(name.toLocaleLowerCase() === 'drive') return imageGoogleDrive;
}