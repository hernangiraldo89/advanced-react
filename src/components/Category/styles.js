import styled, { css } from 'styled-components'

const categoryItemSize = '60px'

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: ${categoryItemSize};
`

export const Figure = styled.figure`
  margin: 0;
  display: block;
  height: ${categoryItemSize};
  width: ${categoryItemSize};
  border: 1px solid #ddd;
  border-radius: 50%;
  overflow: hidden;
  background: lightgray;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${props => props.loading === 'true' && css`
    background: transparent;
    width: 110%;
    height: 110%;
    margin-left: -5%;
    margin-top: -5%;
  `}
`
