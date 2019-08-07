import React from 'react'

import { MdFavoriteBorder } from 'react-icons/md'

import { Article, ImgWrapper, Img, Button } from './styles'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1553987882-91d92995e16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src }) => {
  return (
    <Article>
      <a href={`/details/${id}`}>
        <ImgWrapper>
          <Img src={DEFAULT_IMAGE} />
        </ImgWrapper>
      </a>

      <Button>
        <MdFavoriteBorder size='24px' /> {likes} likes!
      </Button>
    </Article>
  )
}
