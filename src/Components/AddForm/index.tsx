import React from 'react'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from '../Button';
import Container from "../Container";
import Content from "../Content";
import Flex from '../Flex';
import FlexBetween from '../FlexBetween';
import Input from '../Input';

import InputBlock from "../InputBlock";
import TextArea from '../TextArea';
import TextEditor from '../TextEditor';

import { Inputs, Buttons } from './styles';
const AddForm = () => {
  const [newField, setNewField] = React.useState(0);
  const [value, setValue] = React.useState('');

  console.log(newField)
  return (
    <Container>
      <Content>
        <Box>
          <BoxHeader title='Resumo' />
          <BoxContent>
            <InputBlock>
              <label htmlFor="title">Título</label>
              <Inputs id='title' type='text' />
            </InputBlock>
            <InputBlock>
              <label htmlFor="subtitle">Subtítulo</label>
              <Inputs id='subtitle' type='text' />
            </InputBlock>
            <InputBlock>
              <label htmlFor="status">Status</label>
              <Inputs id='status' type='text' list='statu' />
              <datalist id='statu'>
                <option value='Publicado' />
                <option value='Não Publicado' />
              </datalist>
            </InputBlock>
            <Flex>
              <Input type='checkbox' />
              <p>Receber notificação por e-mail<br /> a cada preenchimento</p>
            </Flex>
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader title='Descrição' />
          <BoxContent>
            <TextArea height='200px'>
              <TextEditor value={value} setValue={setValue} />
            </TextArea>
          </BoxContent>
        </Box>
      </Content>
      {newField === 1 ?
        <>
          <Box>
            <BoxHeader>
              <Flex>
                <Button><BiDownArrow /></Button>
                <Button><BiUpArrow /></Button>
              </Flex>
              <Button><BsTrash /></Button>
            </BoxHeader>
            <BoxContent>
              <InputBlock>
                <label htmlFor="fieldname">Nome do campo</label>
                <Inputs id='fieldname' type='text' />
              </InputBlock>
              <InputBlock>
                <label htmlFor="status">Status</label>
                <Inputs id='status' type='text' list='statu' />
                <datalist id='statu'>
                  <option value='Texto' />
                  <option value='Área de texto' />
                  <option value='Multipla escolha' />
                  <option value='Seleção unica' />
                  <option value='Caixa de seleção' />
                  <option value='Data' />
                  <option value='Numero' />
                </datalist>
              </InputBlock>
              <InputBlock>
                <FlexBetween>
                  <InputBlock>
                    <p><b>Obrigatório</b></p>
                    <Flex>
                      <label htmlFor="yes">Sim</label>
                      <Input id='yes' type='radio' />
                    </Flex>
                    <Flex>
                      <label htmlFor="no">Não</label>
                      <Input id='no' type='radio' />
                    </Flex>
                  </InputBlock>
                  <InputBlock>
                    <p><b>Ocultar campo na<br /> págína do formulário</b> </p>
                    <Flex>
                      <label htmlFor="yes">Sim</label>
                      <Input id='yes' type='radio' />
                    </Flex>
                    <Flex>
                      <label htmlFor="no">Não</label>
                      <Input id='no' type='radio' />
                    </Flex>
                  </InputBlock>
                </FlexBetween>
              </InputBlock>
            </BoxContent>
          </Box>
        </>
        : null}
      <Buttons onClick={() => { setNewField(1) }}>+ Adicionar novo campo</Buttons>
      <br />
      <br />
      <br />
      <Buttons>Salvar</Buttons>
      <br />
      <br />
      <br />
    </Container >
  )
}

export default AddForm;