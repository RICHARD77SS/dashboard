import React from 'react';
import Button from '../Button';
import { Wrapper, Droped } from './styles'
import { NavLink } from 'react-router-dom';

const DropPatrimonies = () => {
  const [dropedOpen, setDropedOpen] = React.useState(false);

  return (
    <Wrapper>
      <Button
        onMouseEnter={() => setDropedOpen(true)}
        onMouseLeave={() => setDropedOpen(false)}
      >Patrimônio</Button>
      {dropedOpen ?
        <>
          <Droped onMouseEnter={() => setDropedOpen(true)}
            onMouseLeave={() => setDropedOpen(false)} className='droped'>
            <NavLink className='navlink' to='/patrimonies'>
              <Button>Todos</Button>
            </NavLink>
            <NavLink className='navlink' to='/patrimoniescategory'>
              <Button>Categorias</Button>
            </NavLink>
            <NavLink className='navlink' to='/patrimoniesplaces'>
              <Button>Locais</Button>
            </NavLink>
            <NavLink className='navlink' to='/patrimoniesimportsexports'>
              <Button>Importar / Exportar</Button>
            </NavLink>
          </Droped>
        </> : null}
    </Wrapper>
  )
}

export default DropPatrimonies;