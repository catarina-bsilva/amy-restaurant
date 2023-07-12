import { useState, useEffect } from "react"

import Header from "../layout/Header"

import '../style/Eventos.sass'
import '../style/Geral.sass'

const Eventos = () => {

  const [Eventos, setEventos] = useState([])

  useEffect(() => {
    const GetEventos = async() => {
      const Req = await fetch('http://localhost:3000/Eventos')
      const Data = await Req.json()

      setEventos(Data)
      console.log(Data)
    }
    GetEventos()
  }, [])
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <div className="Container" id="ContainerEventos">
          {Eventos.map ((data, index) => (
            <div key={index} id="Evento">
              <h2 id="CategoriaEventos">{Object.keys(data)[0]}</h2>
              {Object.keys(data).map((key, index) => (
                <div key={index} id="Banda">
                    <h3>"{data[key].nome}"</h3>
                    <img src={data[key].foto} alt="Foto da Banda" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Eventos