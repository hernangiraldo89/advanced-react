import styled from 'styled-components'

import { fadeIn } from './../../styles/animations'

export const Article = styled.article`
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
  overflow: hidden;
  box-shadow: inset 0 -3px 0 rgba(84,94,111,.2);
`

export const ImgWrapper = styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 010px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 12px;

  & svg {
      margin-right: 4px;
  }
`
