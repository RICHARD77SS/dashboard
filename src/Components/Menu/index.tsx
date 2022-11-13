import React from 'react'
import Button from '../Button'
import { Content, Container, Overlay } from './styles'
import { NavLink } from 'react-router-dom';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import DropPeople from '../DropPeople';
import DropGroups from '../DropGroups';
import DropStudies from '../DropStudies';
import DropFinancial from '../DropFinancial';
import DropPatrimonies from '../DropPatrimonies';
import DropSchedule from '../DropSchedule';
import DropMedias from '../DropMedias';

const Menu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const ToggleMenu = () => { setMenuOpen(menuOpen === true ? false : true) }

  return (
    <Content>
      <Button onClick={() => ToggleMenu()}><AiOutlineMenuUnfold size='40' /></Button>
      {menuOpen ?
        <>
          <Container>
            <NavLink className='navlink' to='/'>
              <Button id=''>Visão geral</Button>
            </NavLink>
            <NavLink className='navlink' to='/people'>
              <DropPeople />
            </NavLink>
            <NavLink className='navlink' to='/groups'>
              <DropGroups />
            </NavLink>
            <NavLink className='navlink' to='/studies'>
              <DropStudies />
            </NavLink>
            <NavLink className='navlink' to='/financial'>
              <DropFinancial />
            </NavLink>
            <NavLink className='navlink' to='/patrimonies'>
              <DropPatrimonies />
            </NavLink>
            <NavLink className='navlink' to='/schedulecalendar'>
              <DropSchedule />
            </NavLink>
            <NavLink className='navlink' to='/mediasphotos'>
              <DropMedias />
            </NavLink>
            <NavLink className='navlink' to='/'>
              <Button id=''>Ajuda</Button>
            </NavLink>
          </Container>

          <Overlay onClick={() => setMenuOpen(false)}></Overlay>
        </>
        : null}

    </Content>
  )
}

export default Menu