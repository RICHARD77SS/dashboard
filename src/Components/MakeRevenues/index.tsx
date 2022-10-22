import React from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { GiConfirmed } from 'react-icons/gi';
import BoxContent from '../BoxContent';
import BoxHeader from '../BoxHeader';
import FlexBetween from '../FlexBetween';
import Input from '../Input';
import InputBlock from '../InputBlock';

import { Container, Content, Close } from './styles';
interface Props {
  children?: React.ReactNode;
  onclick?: () => void;
}
const MakeRevenues = ({children,onclick}:Props) => {
  return (
    <Container>
      <Content>
        <BoxHeader title='Criar Receita'>{children}</BoxHeader>
        <BoxContent>
          <FlexBetween>
            <InputBlock>
              <label htmlFor="data">Data</label>
              <Input type='date' />
            </InputBlock>
            <InputBlock>
              <label htmlFor="description">Descrição</label>
              <Input type='text' />
            </InputBlock>
            <InputBlock>
              <label htmlFor="value">Valor</label>
              <Input type='text' placeholder='0.00'/>
            </InputBlock>
            <InputBlock>
              <label htmlFor="pay">Pago?</label>
              <GiConfirmed />
              <AiOutlineExclamationCircle />
            </InputBlock>
          </FlexBetween>
          <FlexBetween>
            <InputBlock>
              <label htmlFor="recibo">Recebido de</label>
              <select title='recibo'>
                <option value='' ></option>
              </select>
            </InputBlock>
            <InputBlock>
              <label htmlFor="description">Categoria</label>
              <select title='recibo'>
                <option value='' ></option>
              </select>
            </InputBlock>
            <InputBlock>
              <label htmlFor="value">Conta</label>
              <select title='recibo'>
                <option value='' ></option>
              </select>
            </InputBlock>
            <InputBlock>
              <label htmlFor="pay">Centro de custo</label>
              <select title='recibo'>
                <option value='' ></option>
              </select>
            </InputBlock>
          </FlexBetween>
          <FlexBetween>
            <InputBlock>
              <label htmlFor="recibo">Tipo de pagamento</label>
              <select title='recibo'>
                <option value='' ></option>
              </select>
            </InputBlock>
            <InputBlock>
              <label htmlFor="description">Doc nº</label>
              <Input type='text' />
            </InputBlock>
            <InputBlock>
              <label htmlFor="value">Conta</label>
              <textarea title="text" id="" cols={30} rows={10}></textarea>
            </InputBlock>
          </FlexBetween>
        </BoxContent>
      </Content>
      <Close onClick={onclick}></Close>
    </Container>
  )
}

export default MakeRevenues