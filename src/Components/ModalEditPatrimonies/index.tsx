import React from 'react';

import { PatrimoniesContext } from '../../contexts/patrimoniesContext';

import BoxContent from '../BoxContent';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';
import InputBlock from '../InputBlock';

import { Container, Form, Close } from './styles';
const ModalEditPatrimonies = () => {

  const {
    name,
    code,
    category,
    place,
    situation,
    conservation,
    origin,
    price,
    purchaseDate,
    docNumber,
    lifeCycle,
    observation,
    amount,
    nameHandler,
    codeHandler,
    categoryHandler,
    placeHandler,
    situationHandler,
    conservationHandler,
    originHandler,
    priceHandler,
    purchaseDateHandler,
    docNumberHandler,
    lifeCycleHandler,
    observationHandler,
    amountHandler,
    handleSubmit,
    CloseModal
  } = React.useContext(PatrimoniesContext)
  return (

    <Container>
      <Form onSubmit={handleSubmit}>
        <BoxHeader title='Transferencia'>
          <Button onClick={() => CloseModal()} type='button'>X</Button>
        </BoxHeader>
        <BoxContent>
          <Flex>
            <InputBlock>
              <label htmlFor="name">Nome</label>
              <Input type='text' value={name} onChange={nameHandler} />
            </InputBlock>
            <InputBlock>
              <label htmlFor="code">Código</label>
              <Input type='text' value={code} onChange={codeHandler} />
            </InputBlock>
          </Flex>
          <Flex>
            <InputBlock>
              <label htmlFor="categoria">Categoria</label>
              <select title='text' value={category} onChange={categoryHandler} >
                <option value=''></option>
                <option value=''></option>
              </select>
            </InputBlock>
            <InputBlock>
              <label htmlFor="local">Local</label>
              <select title='text' value={place} onChange={placeHandler} >
                <option value='indefinido'>Indefinido</option>
                <option value='almoxerifado'>Almoxerifado</option>
                <option value='templo'>Templo</option>
                <option value='estacionamento'>Estacionamento</option>
              </select>
            </InputBlock>
            <InputBlock>
              <label htmlFor="situação">Situação</label>
              <select title='text' value={situation} onChange={situationHandler} >
                <option value='uso'>Uso</option>
                <option value='desuso'>Desuso</option>
                <option value='manutenção'>Manutenção</option>
                <option value='defeito'>Defeito</option>
                <option value='emprestado'>Emprestado</option>
              </select>
            </InputBlock>
          </Flex>
          <Flex>
            <InputBlock>
              <label htmlFor="conservação">Conservação</label>
              <select title='text' value={conservation} onChange={conservationHandler} >
                <option value='novo'>Novo</option>
                <option value='bom'>Bom</option>
                <option value='regular'>Regular</option>
                <option value='ruim'>Ruim</option>
                <option value='pessimo'>Péssimo</option>
              </select>
            </InputBlock>
            <InputBlock>
              <label htmlFor="origem">Origem</label>
              <select title='text' value={origin} onChange={originHandler} >
                <option value='compra'>Compra</option>
                <option value='doação'>Doação</option>
                <option value='alugado'>Alugado</option>
                <option value='emprestado'>Emprestado</option>
                <option value='outro'>Outro</option>
              </select>
            </InputBlock>
            <InputBlock>
              <label htmlFor="preço">Preço</label>
              <Input type='number' value={price} onChange={priceHandler} />
            </InputBlock>
          </Flex>
          <Flex>
            <InputBlock>
              <label htmlFor="buydate">Data de compra</label>
              <Input type='date' value={purchaseDate?.split('T')[0]} onChange={purchaseDateHandler} />
            </InputBlock>
            <InputBlock>
              <label htmlFor="doc">Doc nº</label>
              <Input type='number' value={docNumber} onChange={docNumberHandler} />
            </InputBlock>
            <InputBlock>
              <label htmlFor="lifecycle">Ciclo de vida(em meses)</label>
              <Input type='number' value={lifeCycle} onChange={lifeCycleHandler} />
            </InputBlock>
          </Flex>
          <InputBlock>
            <label htmlFor="observation">Observação</label>
            <textarea title='number' value={observation} onChange={observationHandler} ></textarea>
          </InputBlock>
          <InputBlock>
            <label htmlFor="quantidade">Quantidade</label>
            <Input type='number' value={amount} onChange={amountHandler} />
          </InputBlock>
          <Button type='submit' >Salvar</Button>
        </BoxContent>
      </Form>
      <Close onClick={() => CloseModal()}></Close>
    </Container>
  )
}

export default ModalEditPatrimonies