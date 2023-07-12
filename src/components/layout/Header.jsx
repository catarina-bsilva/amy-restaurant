import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import '../style/Header.sass'
import '../style/Geral.sass'

const Header = () => {

  const location = useLocation()
  
  useEffect(() => {
    
    const Url = location.pathname === "/amy-restaurant/" ? "Home" : location.pathname.substring(16)
    const Links = document.querySelectorAll('.LinkHeader');
    const LinkToActivate = document.querySelector(`#${Url}`)
    if (LinkToActivate) {
      Links.forEach(link => link.classList.remove('Active'))
      LinkToActivate.classList.add("Active")
    }

  }, [location.pathname])

  return (
    <header>
      <Link to="/amy-restaurant/Historia" className='LinkHeader' id='Historia'><h1>História</h1></Link>
      <Link to="/amy-restaurant/Ementa" className='LinkHeader' id='Ementa'><h1>Ementa</h1></Link>
      <h1 id='Amy'>Amy</h1>
      <Link to="/amy-restaurant/Eventos" className='LinkHeader' id='Eventos'><h1>Eventos</h1></Link>
      <Link to="/amy-restaurant/Reservas" className='LinkHeader' id='Reservas'><h1>Reservas</h1></Link>
    </header>
  )
}

export default Header