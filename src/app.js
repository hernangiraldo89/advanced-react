import React from 'react'

import { GlobalStyle } from './styles/GlobalStyles'

import { Header } from './components/Header'
import { Content } from './components/Content'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'

export const App = () => (
  <div>
    <GlobalStyle />
    <Header />
    <Content>
      <ListOfCategories />
      <ListOfPhotoCard />
    </Content>
  </div>
)
