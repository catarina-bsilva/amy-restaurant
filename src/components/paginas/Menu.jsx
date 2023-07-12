import { useState, useEffect } from "react"

import Header from "../layout/Header"

import '../style/Geral.sass'
import '../style/Menu.sass'

const Menu = () => {

  const [Ementa, setEmenta] = useState([])

  useEffect(() => {
    const GetEmenta = async() => {
      const Req = await fetch('http://localhost:3000/Ementa')
      const Data = await Req.json()

      setEmenta(Data)
      console.log(Data)
    }
    GetEmenta()
  }, [])

  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <div className="Container" id="ContainerEmenta">
          {Ementa.map ((category, index) => (
            <div key={index}>
              <h2 id="CategoriaEmenta">{Object.keys(category)[0]}</h2>
              <ul>
                {category[Object.keys(category)[0]].map((product, index) => (
                  <li key={index}>
                      {product.Nome} <span>{product.Preço.toFixed(2)}€</span>
                  </li>
                ))}
              </ul> 
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Menu