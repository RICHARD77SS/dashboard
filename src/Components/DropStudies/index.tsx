import React from 'react';
import Button from '../Button';
import { Wrapper, Droped } from './styles'
import { NavLink } from 'react-router-dom';

const DropStudies = () => {
  const [dropedOpen, setDropedOpen] = React.useState(false);

  return (
    <Wrapper>
      <Button
        onMouseEnter={() => setDropedOpen(true)}
        onMouseLeave={() => setDropedOpen(false)}
      >Ensino</Button>
      {dropedOpen ?
        <>
          <Droped onMouseEnter={() => setDropedOpen(true)}
            onMouseLeave={() => setDropedOpen(false)} className='droped'>
            <NavLink className='navlink' to='/studies'>
              <Button>Estudos</Button>
            </NavLink>
            <NavLink className='navlink' to='/schools'>
              <Button>Escolas</Button>
            </NavLink>
            <NavLink className='navlink' to='/classes'>
              <Button>Turmas</Button>
            </NavLink>
            <NavLink className='navlink' to='/personalaccompaniment'>
              <Button>Acompanhamento pessoal</Button>
            </NavLink>
            <NavLink className='navlink' to='/studiesimportexport'>
              <Button>Importat/Exportar</Button>
            </NavLink>
          </Droped>
        </> : null}
    </Wrapper>
  )
}

export default DropStudies;