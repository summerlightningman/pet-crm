import {FC} from "react";
import { useTranslation } from "react-i18next"
import BackgroundStyled from "./background.styled"
import Img from "./background-img.styled";

const WelcomePage: FC = () => {
    const { t } = useTranslation()
    
    return <BackgroundStyled>
        <Img/>
        <h1>{t('welcome.header')}</h1>
    </BackgroundStyled>
}

export default WelcomePage
