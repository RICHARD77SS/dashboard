import React from 'react'
import { Container } from "./styles";

import { BsGear, BsFlag } from 'react-icons/bs';
import { GiUpgrade } from 'react-icons/gi';
import { GiVikingChurch } from 'react-icons/gi';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineMonetizationOn } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import Button from '../Button';
import ButtonContainer from '../ButtonContainer';
import Options from '../Options';
import Logo from '../Logo';

const Header = () => {
  return (
    <Container>
      <Logo />
      <ButtonContainer>
        <Button><GiVikingChurch /></Button>
        <Button type='button'>Inc name</Button>
        <Options className='option'>
          <Button><AiOutlinePlus /> Criar nova instituição</Button>
          <Button><BsGear />Configurações</Button>
          <Button><GiUpgrade />Upgrade de plano</Button>
          <Button><MdOutlineMonetizationOn />Faturas</Button>
        </Options>
        <Button><AiOutlineSearch /></Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button><BsFlag /></Button>
        <Button><FaRegUserCircle /></Button>
      </ButtonContainer>
    </Container>
  )
}
export default Header;
