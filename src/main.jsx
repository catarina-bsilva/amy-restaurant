import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Inicio from './components/paginas/Inicio.jsx'
import Eventos from './components/paginas/Eventos.jsx'
import GerirReservas from './components/paginas/GerirReservas.jsx'
import Historia from './components/paginas/Historia.jsx'
import Menu from './components/paginas/Menu.jsx'
import Reservas from './components/paginas/Reservas.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/amy-restaurant/" element={<Inicio/>}/>
        <Route path="/amy-restaurant/Eventos" element={<Eventos/>}/>
        <Route path="/amy-restaurant/VerReservas" element={<GerirReservas/>}/>
        <Route path="/amy-restaurant/Historia" element={<Historia/>}/>
        <Route path="/amy-restaurant/Ementa" element={<Menu/>}/>
        <Route path="/amy-restaurant/Reservas" element={<Reservas/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
