import {FC} from "react";
import {Trans} from "react-i18next"
import BackgroundStyled from "./background.styled"
import Img from "./background-img.styled";
import Header from "./header";

const WelcomePage: FC = () => {

    return <BackgroundStyled>
        <Img/>
        <Header><Trans i18nKey="welcome.header"/></Header>
        
    </BackgroundStyled>
}

export default WelcomePage
