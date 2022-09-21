import React from 'react';
import Button from '../Button';
import { Wrapper, Droped } from './styles'
import { NavLink } from 'react-router-dom';

const DropGroups = () => {
  const [dropedOpen, setDropedOpen] = React.useState(false);

  return (
    <Wrapper>
      <Button
        onMouseEnter={() => setDropedOpen(true)}
        onMouseLeave={() => setDropedOpen(false)}
      >Grupos</Button>
      {dropedOpen ?
        <>
          <Droped onMouseEnter={() => setDropedOpen(true)}
            onMouseLeave={() => setDropedOpen(false)} className='droped'>
            <NavLink className='navlink' to='/groups'>
              <Button>Grupos</Button>
            </NavLink>
            <NavLink className='navlink' to='/addgroups'>
              <Button>Adicionar grupo</Button>
            </NavLink>
            <NavLink className='navlink' to='/groupcategories'>
              <Button>Categorias de grupos</Button>
            </NavLink>
            <NavLink className='navlink' to='/groupreports'>
              <Button>Relatorios</Button>
            </NavLink>
            <NavLink className='navlink' to='/importexport'>
              <Button>Importat/Exportar</Button>
            </NavLink>
          </Droped>
        </> : null}
    </Wrapper>
  )
}

export default DropGroups;