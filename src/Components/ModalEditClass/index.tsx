import React from 'react';
import Input from '../Input';

import { Container, Content, Form } from './styles'
import Button from '../Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useAxios } from '../../hooks/useAxios';
import Flex from '../Flex';
import InputBlock from '../InputBlock';
import { ClaassContext } from '../../contexts/claassContext';

const ModalEditClass = () => {
  const { data: dataSchools } = useAxios('schools')
  const { name,
    school,
    time,
    status,
    description,
    nameHandler,
    schoolHandler,
    timeHandler,
    statusHandler,
    descriptionHandler,
    handleSubmit,
    CloseModal
  } = React.useContext(ClaassContext)

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Button type='button' onClick={() => CloseModal()}><AiOutlineCloseCircle size='30' /></Button>
          <InputBlock>
            <label htmlFor='scoolName'>Nome da turma</label>
            <Input type='text' id='scoolName' value={name} onChange={nameHandler} />
          </InputBlock>
          <InputBlock>
            <label>Escola</label>
            <select id='schools' value={school} onChange={schoolHandler}>
              <option value=""></option>
              {dataSchools?.schools.map((schools: any, index: number) => {
                return (
                  <option key={index} value={schools.name} >{schools.name}</option>
                )
              })}
            </select>
          </InputBlock>
          <InputBlock>
            <label>Horário</label>
            <select id='hours' value={time} onChange={timeHandler}>
              <option value="" ></option>
              <option value="Não definido" >Não definido</option>
              <option value="Manhã" >Manhã</option>
              <option value="Tarde" >Tarde</option>
              <option value="Noite">Noite</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label>Status</label>
            <select id='status' value={status} onChange={statusHandler}>
              <option value=""></option>
              <option value="Preparando turma">Preparando turma</option>
              <option value="Em andamento" >Em andamento</option>
              <option value="Pausada" >Pausada</option>
              <option value="Finalizada">Finalizada</option>
            </select>
          </InputBlock>
          <InputBlock>
            <label htmlFor="description">Descrição</label>
            <textarea title='textarea' name="" id="description" cols={30} rows={10} value={description} onChange={descriptionHandler}></textarea>
          </InputBlock>
          <Button type='submit'>Criar</Button>
        </Form>
      </Content>
    </Container >
  )
}

export default ModalEditClass;