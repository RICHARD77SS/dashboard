import React from 'react';
import { AiOutlineExclamationCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { GiConfirmed } from 'react-icons/gi';
import { FinancialContext } from '../../contexts/financialContext';
import { useAxios } from '../../hooks/useAxios';
import Block from '../Block';
import BoxContent from '../BoxContent';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';
import InputBlock from '../InputBlock';

import { Container, Form, Close } from './styles';
const MakeRevenues = () => {
  const [paid, setPaid] = React.useState(false)

  function paidToggle() {
    setPaid(paid === true ? false : true)
  }
  React.useEffect(() => {
    if (paid === false) {
      setPaidOut('Pago')
    } else {
      setPaidOut('Pendente')
    }
  })
  const { data: dataPerson } = useAxios('person')
  const { data: dataCategory } = useAxios('category')

  const {
    date,
    description,
    value,
    setPaidOut,
    receivedFrom,
    category,
    account,
    costCenter,
    typeOfPayment,
    documentNumber,
    competence,
    notes,
    file,
    dateHandler,
    descriptionHandler,
    valueHandler,
    receivedFromHandler,
    categoryHandler,
    accountHandler,
    costCenterHandler,
    typeOfPaymentHandler,
    documentNumberHandler,
    competenceHandler,
    notesHandler,
    fileHandler,
    handleSubmit,
    setModal,
    revenuesExpenses,
    handleDelete,
    id,
    frequenci,
    repetition,
    frequenciHandler,
    repetitionHandler
  } = React.useContext(FinancialContext)
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BoxHeader title={revenuesExpenses ? 'Criar Receita' : 'Criar Despesa'}>
          <Button type='button' onClick={() => setModal(false)}><AiOutlineCloseCircle size={30} /></Button>
          {id ?
            <Button onClick={() => handleDelete(id)}>Apagar</Button>
            : null}
        </BoxHeader>
        <BoxContent>
          <Flex>
            <InputBlock>
              <label htmlFor="data">Data</label>
              <Input type='date' value={date.split('T')[0]} onChange={dateHandler} />
            </InputBlock>
            <InputBlock>
              <label htmlFor="description">Descrição</label>
              <Input type='text' value={description} onChange={descriptionHandler} />
            </InputBlock>
            <InputBlock>
              <label htmlFor="value">Valor</label>
              <Input type='number' placeholder='0.00' min='0' value={value} onChange={valueHandler} />
            </InputBlock>
            <InputBlock>
              <label htmlFor="pay">Pago?</label>
              {paid ?
                <Button type='button' onClick={() => paidToggle()}>
                  <AiOutlineExclamationCircle size={30} color='#f00' />
                </Button>

                :
                <Button type='button' onClick={() => paidToggle()}>
                  <GiConfirmed size={30} color='#0f0' />
                </Button>
              }
            </InputBlock>
          </Flex>
          <Flex>
            <InputBlock>
              <label htmlFor="recibo">Recebido de</label>
              <select title='recibo' value={receivedFrom} onChange={receivedFromHandler}>
                <option value='' ></option>
                {dataPerson?.person.map((person: any, index: any) => {
                  return (

                    <option value={person.name} >{person.name}</option>
                  )
                })}
              </select>
            </InputBlock>
            <InputBlock>
              <label htmlFor="description">Categoria</label>
              <select title='recibo' value={category} onChange={categoryHandler}>
                <option value='' ></option>
                {dataCategory?.category.map((category: any,
                  index: number) => {
                  return (

                    <option key={index} value={category.name} >{category.name}</option>
                  )
                })}
              </select>
            </InputBlock>
            <InputBlock>
              <label htmlFor="value">Conta</label>
              <select title='recibo' value={account} onChange={accountHandler}>
                <option value='' ></option>
              </select>
            </InputBlock>
            <InputBlock>
              <label htmlFor="pay">Centro de custo</label>
              <select title='recibo' value={costCenter} onChange={costCenterHandler}>
                <option value='' ></option>
              </select>
            </InputBlock>
          </Flex>
          <Flex>
            <Block>
              <Flex>
                <InputBlock>
                  <label htmlFor="recibo">Tipo de pagamento</label>
                  <select title='recibo' value={typeOfPayment} onChange={typeOfPaymentHandler}>
                    <option value='Unico' >Único</option>
                    <option value='Parcela' >Parcela</option>
                  </select>
                  {typeOfPayment === 'Parcela' ?
                    <Flex>
                      <InputBlock>
                        <label htmlFor="recibo">Frequência</label>
                        <select title='recibo' value={frequenci} onChange={frequenciHandler}>
                          <option value='Semanal' >Semanal</option>
                          <option value='Mensal' >Mensal</option>
                          <option value='Trimestral' >Trimestral</option>
                          <option value='Semestral' >Semestral</option>
                          <option value='Anual' >Anual</option>
                        </select>
                      </InputBlock>
                      <InputBlock>
                        <label htmlFor="recibo">Repetições</label>
                        <select title='recibo' value={repetition} onChange={repetitionHandler}>
                          <option value='1x' >1x</option>
                          <option value='2x' >2x</option>
                          <option value='3x' >3x</option>
                          <option value='4x' >4x</option>
                          <option value='5x' >5x</option>
                          <option value='6x' >6x</option>
                          <option value='7x' >7x</option>
                          <option value='8x' >8x</option>
                          <option value='9x' >9x</option>
                          <option value='10x' >10x</option>
                          <option value='11x' >11x</option>
                          <option value='12x' >12x</option>
                          <option value='13x' >13x</option>
                          <option value='14x' >14x</option>
                          <option value='15x' >15x</option>
                          <option value='16x' >16x</option>
                          <option value='17x' >17x</option>
                          <option value='18x' >18x</option>
                          <option value='19x' >19x</option>
                          <option value='20x' >20x</option>
                          <option value='21x' >21x</option>
                          <option value='22x' >22x</option>
                          <option value='23x' >23x</option>
                          <option value='24x' >24x</option>
                        </select>
                      </InputBlock>
                    </Flex>
                    : null}
                </InputBlock>
                <InputBlock>
                  <label htmlFor="description">Doc nº</label>
                  <Input type='text' value={documentNumber} onChange={documentNumberHandler} />
                </InputBlock>
              </Flex>
              <Flex>
                <InputBlock>
                  <label htmlFor="competence">Competencia</label>
                  <Input type='date' value={competence.split('T')[0]} onChange={competenceHandler} />
                </InputBlock>
                <InputBlock>
                  <label htmlFor="file">Anexar Arquivo</label>
                  <Input type='file' value={file} onChange={fileHandler} />
                </InputBlock>
              </Flex>
            </Block>
            <InputBlock>
              <label htmlFor="value">Anotações</label>
              <textarea title="text" id="" value={notes} onChange={notesHandler}></textarea>
            </InputBlock>
          </Flex>
          <Flex>
            <Button type='submit' >Salvar e novo</Button>
            <Button type='submit' >Salvar e fechar</Button>
          </Flex>
        </BoxContent>
      </Form>
      <Close onClick={() => setModal(false)}></Close>
    </Container>
  )
}

export default MakeRevenues