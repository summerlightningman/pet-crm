import styled, { css } from 'styled-components'
import cssVariables from "../css-variables";
import {ButtonUIProps} from "./button";

const ButtonUI = styled.button<ButtonUIProps>`
  width: 109px;
  height: 40px;

  font-family: Montserrat, sans-serif;
  font-weight: 800;

  border: none;
  border-radius: 4px;
  outline: none;

  ${
          props => props.primary && css`
            background: ${cssVariables.primary.backgroundColor};
            color: ${cssVariables.primary.color};

            &:hover {
              opacity: .7;
            }

            &:active {
              background: ${cssVariables.primary.active.backgroundColor}
            }

            &:disabled {
              opacity: .3;
            }
          `
  }
`

export default ButtonUI
