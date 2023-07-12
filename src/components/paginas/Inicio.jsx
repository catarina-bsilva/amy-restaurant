import { Link } from 'react-router-dom'

import '../style/Inicio.sass'

const Inicio = () => {
  return (
    <div id="Inicio">
      <Link to="/amy-restaurant/Historia" id='LinkEntrance'><h1>Entrance</h1></Link> 
    </div>
  )
}

export default Inicio