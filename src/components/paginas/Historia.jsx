import Header from "../layout/Header"

import '../style/Historia.sass'
import '../style/Geral.sass'

const Historia = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <div className="Container">
          <p>Amy, fundado em 2020, é um restaurante com live-band nas noites dos fins de semana.  </p>
          <p>Tentamos convidar sempre bandas novas, que não sejam conhecidas e que tenham o Jazz como maior influência. Na última sexta feira de cada mês, em vez de uma banda, abrimos o nosso palco a quem se quiser juntar a uma descontraída Jam Session.</p>
          <p>Desde a nossa abertura que Amy tem sido um sucesso, sendo já notícia em várias revistas gastronómicas e até mesmo revistas de música que se renderam ao conceito.</p>
          <p>Esperemos recebê-lo em breve.</p>
        </div>
      </main>
    </div>
  )
}

export default Historia