import React, { useState } from 'react'
import useFetch from 'use-http'
import { useItems, BACKEND_HOST } from '../utils/Hooks'

import '../styles/ItemMovement.css';
import '../styles/Button.css';

function SubmitAction(props) {
  if (props.movementType == "entry"){
    return (
      <a onClick={props.onSubmit} className="item-movement-action button">Registrar Entrada</a>
    )
  }
  else if (props.movementType == "egress") {
    return (
      <a onClick={props.onSubmit} className="item-movement-action egress-action button">Registrar Salida</a>
    )
  }
  else {
    return (<></>)
  }
}

function SelectOptions(props) {
  return props.items.map((item, i) => (
      <option key={`option-${i}-${item.id}`} selected={props.selected} value={item.id}>{item.name} / {item.type}</option>
    )
  )
}

function ItemMovementForm(props) {
  const [id, setId] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const { movementType } = props
  const { post, response, loading, error } = useFetch(`${BACKEND_HOST}/stock-manager/movements`)

  const items = useItems([])

  async function postData() {
    const type = movementType == "entry" 
      ? "ingreso"
      : movementType == "egress"
      ? "salida"
      : ""
  
    const data = await post({
      productId: id,
      observations: description,
      type, quantity, price
    })

    if (response.ok) clearForm()
  }

  function clearForm() {
    setId("")
    setQuantity("")
    setPrice("")
    setDescription("")
  }

  function submitForm() {
    postData()
  }

  return(
    <form className="item-movement-form">
      <div className="item-movement-form-row">
        <label for="id">Artículo:</label>
        <select name="id" onChange={(e) => setId(e.target.value)}>
          <option value="">Seleccione un Artículo</option>
          <SelectOptions selected={id} items={items}/>
        </select>
      </div>
      <div className="item-movement-form-row">
        <label>Cantidad:</label>
        <input type="text" name="quantity" onChange={(e) => setQuantity(e.target.value)} value={quantity}/>
      </div>
      <div className="item-movement-form-row">
        <label>Precio:</label>
        <input type="text" name="price" onChange={(e) => setPrice(e.target.value)} value={price} />
      </div>
      <div className="item-movement-form-row">
        <label>Observaciones:</label>
        <textarea name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
      </div>
      <SubmitAction onSubmit={submitForm} movementType={movementType}/>

    </form>
  )
}

export default ItemMovementForm
