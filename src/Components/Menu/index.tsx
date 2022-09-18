import React from 'react'
import Button from '../Button'
import { Content, Container, Overlay } from './styles'
import { NavLink } from 'react-router-dom';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

const Menu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const ToggleMenu =()=>{setMenuOpen(menuOpen===true?false:true)}

  return (
    <Content>
      <Button onClick={() => ToggleMenu()}><AiOutlineMenuUnfold size='40'/></Button>
      {menuOpen ?
        <>
          <Container>
            <NavLink className='navlink' to='/'>
              <Button id=''>Visão geral</Button>
            </NavLink>
            <NavLink className='navlink' to='/people'>
              <Button id=''>Pessoas</Button>
            </NavLink>
            <NavLink className='navlink' to='/'>
              <Button id=''>Grupos</Button>
            </NavLink>
            <NavLink className='navlink' to='/'>
              <Button id=''>Ensino</Button>
            </NavLink>
            <NavLink className='navlink' to='/'>
              <Button id=''>Financeiro</Button>
            </NavLink>
            <NavLink className='navlink' to='/'>
              <Button id=''>Patrimônio</Button>
            </NavLink>
            <NavLink className='navlink' to='/'>
              <Button id=''>Agenda</Button>
            </NavLink>
            <NavLink className='navlink' to='/'>
              <Button id=''>Mídias</Button>
            </NavLink>
            <NavLink className='navlink' to='/'>
              <Button id=''>Ajuda</Button>
            </NavLink>
          </Container>
          
          <Overlay onClick={()=>setMenuOpen(false)}></Overlay>
        </>
        : null}
      
    </Content>
  )
}

export default Menu