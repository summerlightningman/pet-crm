import {FC} from "react";
import BackgroundStyled from "./background.styled"
import Img from "./background-img.styled";

const WelcomePage: FC = () => {
    return <BackgroundStyled>
        <Img/>
        <h1>Добро пожаловать в пет-проект PET-CRM</h1>
    </BackgroundStyled>
}

export default WelcomePage
