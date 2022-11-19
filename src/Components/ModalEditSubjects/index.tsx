import React from 'react'
import { SubjectsContext } from '../../contexts/subjectsContext';
import { useAxios } from '../../hooks/useAxios';
import Block from "../Block";
import Button from "../Button";
import Flex from "../Flex";
import FlexBetween from "../FlexBetween";
import Input from "../Input";
import InputBlock from "../InputBlock";

import { Container, Content, Box, BoxHeader, BoxContent, BoxFooter, Closed } from './styles'

const ModalEditSubjects = () => {
  const { data: dataPerson } = useAxios('person')
  const {
    name,
    teacher,
    classIndex,
    nameHandler,
    teacherHandler,
    classIndexHandler,
    handleSubmit,
    handleEdit,
    handleDelete,
    CloseModal,
  } = React.useContext(SubjectsContext)
  return (
    <Container >
      <Content onSubmit={handleSubmit}>
        <Box>
          <BoxHeader>
            <FlexBetween>
              <h3>Editar</h3>
              <Button type='button' onClick={() => CloseModal()}>Close</Button>
            </FlexBetween>
          </BoxHeader>
          <BoxContent>
            <InputBlock>
              <label htmlFor="title">Nome</label>
              <Input placeholder='nome' type='text' value={name} onChange={nameHandler} />
            </InputBlock>
            <InputBlock>
              <label htmlFor="description">Professor(a)</label>
              <select title='teacher' value={teacher} onChange={teacherHandler}>
                <option value=''></option>
                {dataPerson?.person.map((person: any, index: number) => {
                  return (
                    <option key={index} value={person.name}>{person.name}</option>
                  )
                })}
              </select>
            </InputBlock>
          </BoxContent>
          <BoxFooter>
            <Button type='submit'>Salvar</Button>
          </BoxFooter>
        </Box>
      </Content>
      <Closed onClick={() => CloseModal()}></Closed>
    </Container>
  )
}
export default ModalEditSubjects;