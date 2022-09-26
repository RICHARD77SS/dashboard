import React from 'react';
import Button from '../Button';
import { Wrapper, Droped } from './styles'
import { NavLink } from 'react-router-dom';

const DropFinancial = () => {
  const [dropedOpen, setDropedOpen] = React.useState(false);

  return (
    <Wrapper>
      <Button
        onMouseEnter={() => setDropedOpen(true)}
        onMouseLeave={() => setDropedOpen(false)}
      >Financias</Button>
      {dropedOpen ?
        <>
          <Droped onMouseEnter={() => setDropedOpen(true)}
            onMouseLeave={() => setDropedOpen(false)} className='droped'>
            <NavLink className='navlink' to='/financial'>
              <Button>Financias</Button>
            </NavLink>
            <NavLink className='navlink' to='/financialtransactions'>
              <Button>Transações</Button>
            </NavLink>
            <NavLink className='navlink' to='/financialreports'>
              <Button>Relatorios</Button>
            </NavLink>
            <NavLink className='navlink' to='/financialcategories'>
              <Button>Categorias</Button>
            </NavLink>
            <NavLink className='navlink' to='/financialaccounts'>
              <Button>Contas</Button>
            </NavLink>
            <NavLink className='navlink' to='/financialcontacts'>
              <Button>Contatos</Button>
            </NavLink>
            <NavLink className='navlink' to='/financialcustcenter'>
              <Button>Centros de custos</Button>
            </NavLink>
            <NavLink className='navlink' to='/financialimportsexports'>
              <Button>Importar/exportar</Button>
            </NavLink>
          </Droped>
        </> : null}
    </Wrapper>
  )
}

export default DropFinancial;