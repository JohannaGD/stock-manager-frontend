import React from 'react'
import Button from './Button'
import { TYPE_MAPPING } from '../utils/Mappings'

import '../styles/Table.css';

function ItemTableRow(props) {
  return props.items.map((item, i) => (
      <tr key={`${i}-${item.id}`}>
        <td>{item.id}</td>
        <td>{TYPE_MAPPING[item.type]}</td>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td><Button routeLink to={`/articulos/${item.id}`} label="Detalles" /></td>
      </tr>
    )
  )
}

export default ItemTableRow
