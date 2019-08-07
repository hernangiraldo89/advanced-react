import React from 'react'
import { Anchor, Figure, Image } from './styles'

export const Category = ({ cover, path, emoji = '?', loading }) => (
  <Anchor href={path}>
    <Figure>
      <Image src={cover} loading={loading} />
    </Figure>
    {emoji}
  </Anchor>
)
