import en from './messages/messages';
//import es from './translates/es';

export function getTranslation(lang: string) {
    switch(lang) {
        case 'en':
            return en;
        //case 'es':
            //return es;
        default:
            return en;
    }
}