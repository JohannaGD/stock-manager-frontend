import { useEffect, useState } from 'react'
import useFetch from 'use-http'

const BACKEND_HOST = 'http://localhost:8080'

export function useItems(triggers = []) {
  const [items, setItems] = useState([])
  const { get, response, loading, error  } = useFetch(`${BACKEND_HOST}/stock-manager/products`)

  async function getData() {
    const data = await get()
    if (response.ok) setItems(data)
  }

  useEffect(() => {
    // const data =  require('../data-mocks/Data.json')
    getData()
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
