import React, { useState } from 'react'
import MovementTableRow from './MovementTableRow'
import { useMovements } from '../utils/Hooks'

import '../styles/Table.css';

function MovementTable(props) {

  const items = useMovements(props.productId, [])

  return(
    <div className="table-container">
      <table className="base-table">
        <thead>
          <tr>
            <th>ID Producto</th>
            <th>Tipo</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          <MovementTableRow items={items}/>
        </tbody>
      </table>
    </div>
  )
}

export default MovementTable
