import Button from '../Button';
import Input from '../Input';

import { Container, ContainerHeader, Content, Header, BoxContent, Top, Center, Options, Table, Thead, Tr, Th, Tbody, Td, Bottom } from './styles';

import { AiOutlineCopy, AiOutlineDownload, AiOutlinePrinter, AiOutlineEye } from 'react-icons/ai';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

const Birthday = () => {
  return (
    <Container>
      <ContainerHeader>
        <h3>Aniversários</h3>
        <p>Pessoas &gt; Aniversários</p>
      </ContainerHeader>
      <Content>
        <Header>
          <h3>Selecione um mês</h3>
        </Header>
        <BoxContent>
          <Top>
            <Button>jan(0)</Button>
            <Button>fev(0)</Button>
            <Button>mar(0)</Button>
            <Button>abr(0)</Button>
            <Button>mai(0)</Button>
            <Button>jun(0)</Button>
            <Button>jul(0)</Button>
            <Button>ago(0)</Button>
            <Button>set(0)</Button>
            <Button>out(0)</Button>
            <Button>nov(0)</Button>
            <Button>dez(0)</Button>
          </Top>
          <Center>
            <Options>
              <Input type='number' step='20' min='0' max='100' />
              <p>Resultados por página</p>
            </Options>
            <Options>
              <Button><AiOutlineCopy /></Button>
              <Button><AiOutlineDownload /></Button>
              <Button><AiOutlinePrinter /></Button>
              <Button><AiOutlineEye />Colunas</Button>
            </Options>
          </Center>
          <Table>
            <Thead>
              <Tr>
                <Th><Button>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                <Th><Button>Imagem <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                <Th><Button>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Data here</Td>
                <Td>Image here</Td>
                <Td>Name here</Td>
              </Tr>
            </Tbody>
          </Table>
          <Bottom>
            <Button>Anterior</Button>
            <Button>Proximo</Button>
          </Bottom>
        </BoxContent>
      </Content>
    </Container>
  )
}

export default Birthday;