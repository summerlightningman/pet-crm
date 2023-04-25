import styled from "styled-components"
import src from '@assets/imgs/welcome-bg.jpg'

const Img = styled.img.attrs(() => ({
    src
}))`
  width: inherit;
  height: inherit;
  filter: blur(8px);
  position: absolute;
  z-index: -1;
`

export default Img
