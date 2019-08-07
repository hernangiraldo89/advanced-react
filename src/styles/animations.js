import { css, keyframes } from 'styled-components'

export const fadeIn = ({ time = '.5s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyframes} ${type};`

export const fromTop = ({ time = '.3s', type = 'ease', topFrom = 0, topTo = 0 } = {}) =>
  css`animation: ${time} ${animationFromTop(topFrom, topTo)} ${type}`

export const fadeInKeyframes = keyframes`
from {
  filter: blur(5px);
  opacity: 0;
}

to {
  filter: blur(0);
  opacity: 1;
}
`

export const animationFromTop = (topFrom, topTo) => keyframes`
from {
  top: ${topFrom}px;
}

to {
  top: ${topTo}px;
}
`
