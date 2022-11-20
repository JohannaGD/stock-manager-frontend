import React from 'react'
import Content from '../../components/Content';
import ItemMovementForm from '../../components/ItemMovementForm';

function EntryForm(props) {
  return(
    <Content>
      <h1>Ingreso de Artículos</h1>
      <ItemMovementForm movementType="entry" />
    </Content>
  )
}

export default EntryForm
