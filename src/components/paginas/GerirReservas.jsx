import React from 'react'
import { useState, useEffect } from "react"

import Header from "../layout/Header"

import '../style/GerirReservas.sass'
import '../style/Geral.sass'

const GerirReservas = () => {

  const [Reservas, setReservas] = useState([])

  useEffect(() => {
    const GetReservas = async() => {
      const Req = await fetch('http://localhost:3000/Reservas')
      const Data = await Req.json()

      Data.sort((a, b) => new Date(a.dataReserva) - new Date(b.dataReserva))

      setReservas(Data)
      console.log(Data)
    }
    GetReservas()
  }, [])

  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <table id='Tabela'>
          <thead id='TopoTabela'>
            <tr>
              <th id='NrReserva'>Nº Reserva</th>
              <th id='DataReserva'>Data</th>
              <th id='NomeReserva'>Nome</th>
              <th id='NrPessoasReserva'>Nº Pessoas</th>
              <th id='PedidosEspeciaisReserva'>Pedidos Especiais</th>
            </tr>
          </thead>
          <tbody id='CorpoTabela'>
            {Reservas.map((Reserva, index) => (
              <tr key={index}>
                <td>{Reserva.id}</td>
                <td>{Reserva.dataReserva}</td>
                <td>{Reserva.nome}</td>
                <td>{Reserva.numeroPessoas}</td>
                <td>{Reserva.pedidosEspeciais}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default GerirReservas