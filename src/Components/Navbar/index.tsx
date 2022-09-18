
import {NavLink} from 'react-router-dom'
import { Nav, Vbar } from "./styles";
import Button from '../Button';

const Navbar = () => {
  return (
    <Nav>
      <NavLink className='navlink' to='/'>
        <Button id=''>Visão geral</Button>
      </NavLink>
      <Vbar />
      <NavLink className='navlink' to='/people'>
        <Button id=''>Pessoas</Button>
      </NavLink>
      <Vbar />
      <NavLink className='navlink' to='/'>
        <Button id=''>Grupos</Button>
      </NavLink>
      <Vbar />
      <NavLink className='navlink' to='/'>
        <Button id=''>Ensino</Button>
      </NavLink>
      <Vbar/>
      <NavLink className='navlink' to='/'>
        <Button id=''>Financeiro</Button>
      </NavLink>
      <Vbar />
      <NavLink className='navlink' to='/'>
        <Button id=''>Patrimônio</Button>
      </NavLink>
      <Vbar />
      <NavLink className='navlink' to='/'>
        <Button id=''>Agenda</Button>
      </NavLink>
      <Vbar/>
      <NavLink className='navlink' to='/'>
        <Button id=''>Mídias</Button>
      </NavLink>
      <Vbar />
      <NavLink className='navlink' to='/'>
        <Button id=''>Ajuda</Button>
      </NavLink>
    </Nav>
  )
}

export default Navbar;