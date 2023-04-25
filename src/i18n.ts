import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',
        debug: true,
        resources: {
            ru: {
                translation: {
                    welcome: {
                        header: 'Добро пожаловать на пет-проект PET-CRM!'
                    }
                }
            }
        }
    })

export default i18n
