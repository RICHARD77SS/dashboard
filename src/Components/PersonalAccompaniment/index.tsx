import Box from "../Box"
import BoxContent from "../BoxContent"
import BoxHeader from "../BoxHeader"
import Button from "../Button"
import Container from "../Container"
import Table from "../Table"
import Tbody from "../Tbody"
import Td from "../Td"
import Th from "../Th"
import Thead from "../Thead"
import TopTableOptions from "../TopTableOptions"
import Tr from "../Tr"
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import PageSelector from "../PageSelector"
import EditRemove from "../EditRemove"
import Input from "../Input"
import { InputBox } from './styles'

const PersonalAccompaniment = () => {
  return (
    <Container>
      <h3>Acompanhamento Pessoal</h3>
      <Box>
        <BoxHeader title={`Resultados: 0`}>
          
          <Button>+ Criar Turma</Button>
        </BoxHeader>  
        <BoxContent>
          <TopTableOptions />
          <InputBox>
            <label htmlFor="search">Pesquisar</label>
            <Input type='search' />
          </InputBox>
          <Table>
            <Thead>
              <Tr>
                <Th>
                  <Button>Título <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
                <Th>
                  <Button>Líderes <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
                <Th>
                  <Button>Pessoas  <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
                <Th>
                  <Button>Progresso <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
                <Th>
                  <Button>Status <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
                <Th>
                  <Button>Ações <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  Nome
                </Td>
                <Td>
                  Lideres
                </Td>
                <Td>
                  Pessoas
                </Td>
                <Td>
                  Progresso
                </Td>
                <Td>
                  status
                </Td>
                <Td>
                  <EditRemove />
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <PageSelector />
        </BoxContent>
      </Box>  
    </Container>
  )
}

export default PersonalAccompaniment;