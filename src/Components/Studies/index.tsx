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


const Studies = () => {
  return (
    <Container>
      <h3>Estudos</h3>
      <Box>
        <BoxHeader title={`Resultados: 0`}>
          
          <Button>+ Adicionar estudos</Button>
        </BoxHeader>  
        <BoxContent>
          <TopTableOptions />
          <Table>
            <Thead>
              <Tr>
                <Th>
                  <Button>Nome <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
                <Th>
                  <Button>Categoria <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
                <Th>
                  <Button>Criado em  <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
                <Th>
                  <Button>Ações <p><BsArrowUp /><BsArrowDown /></p></Button>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  NAme
                </Td>
                <Td>
                  Categorie
                </Td>
                <Td>
                  Data
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

export default Studies;