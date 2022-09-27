import React from 'react';
import Button from '../Button';
import { Wrapper, Droped } from './styles'
import { NavLink } from 'react-router-dom';

const DropSchedule = () => {
  const [dropedOpen, setDropedOpen] = React.useState(false);

  return (
    <Wrapper>
      <Button
        onMouseEnter={() => setDropedOpen(true)}
        onMouseLeave={() => setDropedOpen(false)}
      >Agenda</Button>
      {dropedOpen ?
        <>
          <Droped onMouseEnter={() => setDropedOpen(true)}
            onMouseLeave={() => setDropedOpen(false)} className='droped'>
            <NavLink className='navlink' to='/schedulecalendar'>
              <Button>Calendário</Button>
            </NavLink>
            <NavLink className='navlink' to='/scheduleevents'>
              <Button>Eventos</Button>
            </NavLink>
            <NavLink className='navlink' to='/schedulewarnings'>
              <Button>Mural de avisos</Button>
            </NavLink>
            <NavLink className='navlink' to='/scheduleanotation'>
              <Button>Anotações</Button>
            </NavLink>
            <NavLink className='navlink' to='/scheduleimportsexports'>
              <Button>Importar / Exportar</Button>
            </NavLink>
          </Droped>
        </> : null}
    </Wrapper>
  )
}

export default DropSchedule;