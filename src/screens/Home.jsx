import React from 'react'
import Content from '../components/Content';
import { Link, Outlet } from 'react-router-dom'

import '../styles/Nav.css';

function Home(props) {
  return(
    <Content>
      <h1>Inventario Elementos de Consumo</h1>
      <nav className='main-nav'>
        <Link className='main-nav-link' to="/">Inicio</Link>
        <Link className='main-nav-link' to="/articulos">Listado de Articulos</Link>
        <Link className='main-nav-link' to="/articulos/ingreso">Ingreso de Articulos</Link>
        <Link className='main-nav-link' to="/articulos/salida">Salida de Articulos</Link>
      </nav>
      <Outlet />
    </Content>
  )
}

export default Home
