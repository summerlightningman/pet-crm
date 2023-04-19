import styled, {css} from 'styled-components'
import cssVariables from "../css-variables";
import {ButtonUIProps} from "./button.types";

const ButtonUI = styled.button<ButtonUIProps>`
  width: 109px;
  height: 40px;

  font-family: Montserrat, sans-serif;
  font-weight: 800;

  border: none;
  border-radius: 4px;
  outline: none;
  
  &:hover {
    opacity: .85;
  }

  &:disabled {
    opacity: .3;
  }

  ${
          ({ variant }) => (!variant || variant === 'primary') && css`
            background: ${cssVariables.primary.backgroundColor};
            color: ${cssVariables.primary.color};


            &:active {
              background: ${cssVariables.primary.active.backgroundColor};
            }
          `
  }

  ${
          ({ variant }) => variant === 'secondary' && css`
            background: ${cssVariables.secondary.backgroundColor};
            color: ${cssVariables.secondary.color};
            border: 1px solid ${cssVariables.secondary.borderColor};
          `
  }
  
  ${
          ({ variant }) => variant === 'danger' && css`
            background: ${cssVariables.danger.backgroundColor};
            color: ${cssVariables.danger.color};
            border: 1px solid ${cssVariables.danger.borderColor};
          `
  }
`

export default ButtonUI
