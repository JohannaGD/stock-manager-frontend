import React from 'react'
import Content from '../../components/Content';
import ItemMovementForm from '../../components/ItemMovementForm';

function EgressForm(props) {
  return(
    <Content>
      <h1>Salida de Artículos</h1>
      <ItemMovementForm movementType="egress"/>
    </Content>
  )
}

export default EgressForm
