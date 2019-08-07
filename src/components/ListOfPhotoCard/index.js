import React from 'react'

import { List, WrapperPhotoCard } from './styles'

import { PhotoCard } from './../PhotoCard'

export const ListOfPhotoCard = () => {
  return (
    <List>
      {
        [1, 2, 3, 4].map(i => {
          return (
            <WrapperPhotoCard key={i}>
              <PhotoCard />
            </WrapperPhotoCard>
          )
        })
      }
    </List>
  )
}
