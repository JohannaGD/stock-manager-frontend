import React, { useState } from 'react'
import ItemTableFilters from './ItemTableFilters'
import ItemTableRow from './ItemTableRow'
import { useItems, useFilters } from '../utils/Hooks'

import '../styles/Table.css';

function ItemTable(props) {
  const [search, setSearch] = useState("")
  const [itemType, setItemType] = useState("")

  const filteredItems = useItems([])
  // const filteredItems = useFilters(items, {search, itemType}, [search, itemType])

  return(
    <div className="table-container">
      <ItemTableFilters selected={itemType} onSearch={setSearch} onItemType={setItemType} />
      <table className="base-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <ItemTableRow items={filteredItems}/>
        </tbody>
      </table>
    </div>
  )
}

export default ItemTable
