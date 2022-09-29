
import { NavLink } from 'react-router-dom'
import { Nav, Vbar } from "./styles";
import Button from '../Button';
import Menu from '../Menu';
import DropPeople from '../DropPeople';
import DropGroups from '../DropGroups';
import DropStudies from '../DropStudies';
import DropFinancial from '../DropFinancial';
import DropPatrimonies from '../DropPatrimonies';
import DropSchedule from '../DropSchedule';
import DropMedias from '../DropMedias';

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
      <NavLink className='navlink' to='/financial'>
        <DropFinancial />
      </NavLink>
      <Vbar />
      <NavLink className='navlink' to='/patrimonies'>
        <DropPatrimonies />
      </NavLink>
      <Vbar />
      <NavLink className='navlink' to='/schedulecalendar'>
        <DropSchedule />
      </NavLink>
      <Vbar />
      <NavLink className='navlink' to='/mediasphotos'>
        <DropMedias />
      </NavLink>
      <Vbar />
      <NavLink className='navlink' to='/'>
        <Button id=''>Ajuda</Button>
      </NavLink>
    </Nav>
  )
}

export default Navbar;