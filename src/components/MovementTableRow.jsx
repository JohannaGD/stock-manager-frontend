import React from 'react'

import '../styles/Table.css';

function MovementTableRow(props) {
  return props.items.map((item, i) => (
      <tr key={`${i}-${item.id}`}>
        <td>{item.productId}</td>
        <td>{item.type}</td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
        <td>{item.observations}</td>
      </tr>
    )
  )
}

export default MovementTableRow
