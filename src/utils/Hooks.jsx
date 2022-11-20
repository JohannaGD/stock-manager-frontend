import { useEffect, useState } from 'react'

export function useItems(triggers = []) {

  const [items, setItems] = useState([])

  useEffect(() => {
    const data =  require('../data-mocks/Data.json')
    setItems(data)
  }
  , triggers)

  return items
}

export function useFilters(items, filters, triggers=[]) {
  const [filteredItems, setFilteredItems] = useState([])
  const {search, itemType} = filters

  useEffect(() => setFilteredItems(items), [items])

  useEffect(() => {
    setFilteredItems(items.filter((item) => {
      const searchClause = (search === "" || item.name.toLowerCase().includes(search.toLowerCase()))
      const itemTypeClause = (itemType === "" || item.type === itemType)

      return (searchClause && itemTypeClause)
    }))
  }
  , triggers)

  return filteredItems
}

export function useItem(id, triggers = []) {
  const [item, setItem] = useState({})

  useEffect(() => {
    const data =  require('../data-mocks/Data.json')
    setItem(data.find((item) => item.id == id))
  }
  , triggers)

  return item
}
