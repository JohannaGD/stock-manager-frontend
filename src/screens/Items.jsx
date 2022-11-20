import React from 'react'
import Content from '../components/Content';
import ItemTable from '../components/ItemTable';

function Items(props) {

  return(
    <Content>
      <h1>Listado de Artículos</h1>
      <ItemTable />
    </Content>
  )
}

export default Items
