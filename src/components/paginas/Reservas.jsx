import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import Header from "../layout/Header"

import '../style/Reservas.sass'


const Reservas = () => {

  const [UltimoId, setUltimoId] = useState(0)
  const Reserva = document.getElementById('Reserva')

  useEffect(() => {
    const LastId = localStorage.getItem("UltimoId")
    if (LastId) {
      setUltimoId(parseInt(LastId))
    }
  },[])

  useEffect(() => {
    localStorage.setItem("UltimoId", UltimoId.toString())
  },[UltimoId])

  function GerarProximoId() {
    setUltimoId((PrevId) => PrevId + 1)
  }

  const PostReserva = async(Reserva) => {
    const Response = await fetch("http://localhost:3000/Reservas/", {
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(Reserva)
    })

    if (Response.ok) {
      const Data = await Response.json()
    }
  }

  const SubmitForm = async(Event) => {
    Event.preventDefault()
    const Nome = document.getElementById("Nome").value
    const Email = document.getElementById("Email").value
    const DataReserva = document.getElementById("Data").value
    const NumeroPessoas = document.getElementById("NumeroPessoas").value
    const PedidosEspeciais = document.getElementById("PedidosEspeciais").value
    const ProximoId = GerarProximoId()
    const Form = Event.target
    
    const Reserva = {
      id: ProximoId,
      nome: Nome,
      email: Email,
      dataReserva: DataReserva,
      numeroPessoas: NumeroPessoas,
      pedidosEspeciais: PedidosEspeciais
    }

    await PostReserva(Reserva)

    Form.reset()

    const Mensagem = document.getElementById("MensagemReserva")
    Mensagem.style.display = "block"
    setTimeout (() => {
      Mensagem.style.display = "none"
    }, 2000)
  }

  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <div className="Container">
          <h1 id="MensagemReserva">Reserva efectuada com sucesso!</h1>
          <h2>Faça aqui a sua reserva!</h2>
          <form id="Reserva" onSubmit={SubmitForm}>
            <div>
              <label htmlFor="Name">Nome:</label>
              <input type="text" name="Nome" id="Nome"/>
            </div>
            <div>
              <label htmlFor="Email">Email:</label>
              <input type="text" name="Email" id="Email"/>
            </div>
            <div>
              <label htmlFor="Data">Data:</label>
              <input type="date" name="Data" id="Data" />
            </div>
            <div>
              <label htmlFor="NumeroPessoas">Nº de Pessoas:</label>
              <input type="number" name="NumeroPessoas" id="NumeroPessoas"/>
            </div>
            <div>
              <textarea name="PedidosEspeciais" id="PedidosEspeciais" cols="32" rows="4" placeholder="Pedidos Especiais..."></textarea>
            </div>
            <input type="submit" value="Enviar Reserva" />
          </form>
        </div>
        <Link to="/amy-restaurant/VerReservas" id="LinkGerirReservas"> Ver Reservas </Link>
      </main>
    </div>
  )
}

export default Reservas