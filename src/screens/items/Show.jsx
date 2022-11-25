import React from 'react'
import { useParams } from "react-router-dom";
import Content from '../../components/Content';
import MovementTable from '../../components/MovementTable';
import { useItem } from '../../utils/Hooks'

import '../../styles/Item.css';

function Show(props) {
  const params = useParams();
  const productId = params.id
  const item = useItem(productId)

  return(
    <Content>
      <h1>Detalles del Artículo</h1>
      <div className="item-details-container">
        <div className="item-details-container-row">
          <h2>Nombre:</h2>
          <span>{item.name}</span>
        </div>
        <div className="item-details-container-row">
          <h2>Tipo:</h2>
          <span>{item.type}</span>
        </div>
        <div className="item-details-container-row">
          <h2>Cantidad:</h2>
          <span>{item.stock}</span>
        </div>
      </div>
      <div className="item-movements-container">
        <h2>Movimientos proximamente</h2>
        <MovementTable productId={productId}/>
      </div>
    </Content>
  )
}

export default Show
