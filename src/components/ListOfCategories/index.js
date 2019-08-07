import React, { Fragment, useState, useEffect } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-api-hernan.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setLoading(false)
        setCategories(response)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newhowFixed = window.scrollY > 150
      showFixed !== newhowFixed && setShowFixed(newhowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = fixed => (
    <List fixed={fixed}>
      {
        categories.map(c => {
          c = Object.assign({}, c, { loading: loading.toString() })
          return <Item key={c.id}><Category {...c} /></Item>
        }
        )
      }
    </List>
  )

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList('true')}
    </Fragment>
  )
}
