import React from 'react';

import { TransferContext } from '../../contexts/transferContext';
import { useAxios } from '../../hooks/useAxios';

import BoxContent from '../BoxContent';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';
import InputBlock from '../InputBlock';

import { Container, Form, Close } from './styles';
const ModalEditTransfer = () => {

  const { data: dataAccount } = useAxios('account')
  const {
    date,
    value,
    handleSubmit,
    setOpenModal,
    origin,
    destination,
    anotation,
    dateHandler,
    valueHandler,
    originHandler,
    destinationHandler,
    anotationHandler,
    handleDelete,
    id,
    CloseModal
  } = React.useContext(TransferContext)
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BoxHeader title='Transferencia'>
          <Button onClick={() => CloseModal()} type='button'>X</Button>
        </BoxHeader>
        <BoxContent>
          <Flex>
            <InputBlock>
              <label htmlFor="data">Data</label>
              <Input type='date' value={date?.split('T')[0]} onChange={dateHandler} />
            </InputBlock>
            <InputBlock>
              <label htmlFor="value">Valor</label>
              <Input type='number' placeholder='0.00' min='0' value={value} onChange={valueHandler} />
            </InputBlock>
          </Flex>
          <Flex>
            <InputBlock>
              <label htmlFor="recibo">Conta de origem</label>
              <select title='contaorigem' value={origin} onChange={originHandler}>
                <option value='' ></option>
                {dataAccount?.account.map((account: any, index: any) => {
                  return (
                    <option value={account.name} >{account.name}</option>
                  )
                })}
              </select>
            </InputBlock>
            <InputBlock>
              <label htmlFor="description">Conta de destino</label>
              <select title='accountDestination' value={destination} onChange={destinationHandler}>
                <option value='' ></option>
                {dataAccount?.account.map((account: any, index: any) => {
                  return (
                    <option value={account.name} >{account.name}</option>
                  )
                })}
              </select>
            </InputBlock>
          </Flex>
          <Flex>
            <InputBlock>
              <label htmlFor="value">Anotações</label>
              <textarea title="text" id="" value={anotation} onChange={anotationHandler}></textarea>
            </InputBlock>
          </Flex>
          <Flex>
            <Button type='submit' >Salvar</Button>
            {id ?
              <Button type='button' onClick={() => handleDelete(id)}>Remover</Button>
              : null}
          </Flex>
        </BoxContent>
      </Form>
      <Close onClick={() => CloseModal()}></Close>
    </Container>
  )
}

export default ModalEditTransfer