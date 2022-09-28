import React from 'react';
import Button from '../Button';
import { Wrapper, Droped } from './styles'
import { NavLink } from 'react-router-dom';

const DropMedias = () => {
  const [dropedOpen, setDropedOpen] = React.useState(false);

  return (
    <Wrapper>
      <Button
        onMouseEnter={() => setDropedOpen(true)}
        onMouseLeave={() => setDropedOpen(false)}
      >Mídias</Button>
      {dropedOpen ?
        <>
          <Droped onMouseEnter={() => setDropedOpen(true)}
            onMouseLeave={() => setDropedOpen(false)} className='droped'>
            <NavLink className='navlink' to='/mediasphotos'>
              <Button>Fotos</Button>
            </NavLink>
            <NavLink className='navlink' to='/mediasvideos'>
              <Button>Vídeos</Button>
            </NavLink>
            <NavLink className='navlink' to='/mediasforms'>
              <Button>Formulários</Button>
            </NavLink>
            <NavLink className='navlink' to='/mediasdocuments'>
              <Button>Documentos</Button>
            </NavLink>
            <NavLink className='navlink' to='/mediasfiles'>
              <Button>Arquivos</Button>
            </NavLink>
          </Droped>
        </> : null}
    </Wrapper>
  )
}

export default DropMedias;