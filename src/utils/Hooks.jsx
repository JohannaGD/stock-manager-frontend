import { useEffect, useState } from 'react'
import useFetch from 'use-http'

export const BACKEND_HOST = 'http://localhost:8080'

export function useItems(triggers = []) {
  const [items, setItems] = useState([])
  const { get, response, loading, error  } = useFetch(`${BACKEND_HOST}/stock-manager/products`, { cachePolicy: 'cache-and-network' })

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

export function useMovements(id, triggers = []) {
  const [items, setItems] = useState([])
  const { get, response, loading, error  } = useFetch(`${BACKEND_HOST}/stock-manager/products/${id}/movements`, { cachePolicy: 'cache-and-network' })

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
  const { get, response, loading, error } = useFetch(`${BACKEND_HOST}/stock-manager/products/filter?name=${search}&type=${itemType}`, { cachePolicy: 'cache-and-network' })

  async function getData() {
    const data = await get()
    if (response.ok) setFilteredItems(data)
  }

  useEffect(() => {
    setFilteredItems(items)
  },
  [items])

  useEffect(() => {
    getData()
  }
  , triggers)

  return filteredItems
}

export function useItem(id, triggers = []) {
  const [item, setItem] = useState({})
  const { get, response, loading, error  } = useFetch(`${BACKEND_HOST}/stock-manager/products/${id}`, { cachePolicy: 'cache-and-network' })

  async function getData() {
    const data = await get()
    if (response.ok) setItem(data)
  }

  useEffect(() => {
    getData()
  }
  , triggers)

  return item
}
