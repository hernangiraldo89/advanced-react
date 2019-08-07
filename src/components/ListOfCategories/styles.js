import styled, { css } from 'styled-components'

import { fromTop } from './../../styles/animations'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  padding: 8px;
  width: 100%;
  ${props => props.fixed && css`
    position: fixed;
    top: 32px;
    z-index: 1;
    width: 50%;
    transform: scale(.5);
    padding: 4px 16px;
    background: white;
    border-radius: 5px;
    left: 0;
    right: 0;
    margin: 0 auto;
    box-shadow: 0 -3px 6px rgba(0, 0, 0, .2);
    ${fromTop({ topFrom: -24, topTo: 32 })}
  `}
`

export const Item = styled.li`
  padding: 0 8px;
`
