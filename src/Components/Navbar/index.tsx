
import { NavLink } from 'react-router-dom'
import { Nav, Vbar } from "./styles";
import Button from '../Button';
import Menu from '../Menu';
import DropPeople from '../DropPeople';
import DropGroups from '../DropGroups';
import DropStudies from '../DropStudies';

const Navbar = () => {
  return (
    <Nav>
      <Menu />
      <NavLink className='navlink' to='/'>
        <Button id=''>Visão geral</Button>
      </NavLink>
      <Vbar />
      <NavLink className='navlink' to='/people'>
        <DropPeople />
      </NavLink>
      <Vbar />
      <NavLink className='navlink' to='/groups'>
        <DropGroups />
      </NavLink>
      <Vbar />
      <NavLink className='navlink' to='/studies'>
        <DropStudies />
      </NavLink>
      <Vbar />
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
      <Vbar />
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