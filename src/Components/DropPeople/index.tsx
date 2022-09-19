import React from 'react';
import Button from '../Button';
import { Wrapper, Droped } from './styles'
import { NavLink } from 'react-router-dom';

const DropPeople = () => {
  const [dropedOpen, setDropedOpen] = React.useState(false);

  return (
    <Wrapper>
      <Button
        onMouseEnter={() => setDropedOpen(true)}
        onMouseLeave={() => setDropedOpen(false)}
      >Pessoas</Button>
      {dropedOpen ?
        <>
          <Droped onMouseEnter={() => setDropedOpen(true)}
            onMouseLeave={() => setDropedOpen(false)} className='droped'>
            <NavLink className='navlink' to='/people'>
              <Button>Pessoas</Button>
            </NavLink>
            <NavLink className='navlink' to='/addpeople'>
              <Button>Adicionar Pessoas</Button>
            </NavLink>
            <NavLink className='navlink' to='/addfield'>
              <Button>Adicionar Campo</Button>
            </NavLink>
            <NavLink className='navlink' to='/categories'>
              <Button>Adicionar Categoria</Button>
            </NavLink>
            <NavLink className='navlink' to='/office'>
              <Button>Adicionar Cargo</Button>
            </NavLink>
            <NavLink className='navlink' to='/cardpersonal'>
              <Button>Cartão pessoal</Button>
            </NavLink>
            <NavLink className='navlink' to='/birthday'>
              <Button>Aniversariantes</Button>
            </NavLink>
            <NavLink className='navlink' to='/reports'>
              <Button>Relatorios</Button>
            </NavLink>
          </Droped>
        </> : null}
    </Wrapper>
  )
}

export default DropPeople;