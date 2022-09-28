import Aside from "../Aside"
import Box from "../Box"
import BoxContent from "../BoxContent"
import BoxHeader from "../BoxHeader"
import Button from "../Button"
import Container from "../Container"
import Content from "../Content"
import Flex from '../Flex'
import Input from "../Input"
import PageSelector from "../PageSelector"
import Table from "../Table"
import Tbody from "../Tbody"
import Td from "../Td"
import Th from "../Th"
import Thead from "../Thead"
import TopTableOptions from "../TopTableOptions"
import Tr from "../Tr"

const MediaFiles = () => {
  return (
    <Container>
      <Content>
        <Aside>
          <BoxHeader title='Pastas'>
            <Button>+ Pastas</Button>
          </BoxHeader>
          <BoxContent>

          </BoxContent>
        </Aside>
        <Box>
          <BoxHeader title='Arquivos'>
            <Button>+ Arquivos</Button>
          </BoxHeader>
          <BoxContent>
            <TopTableOptions />
            <Flex>
              <label htmlFor="search">Pesquisar</label>
              <Input id='search' type='search' />
            </Flex>
            <Table>
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Tamanho</Th>
                  <Th>Tipo</Th>
                  <Th>Data</Th>
                  <Th>Visibilidade</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
            <PageSelector />
          </BoxContent>
        </Box>
      </Content>
    </Container>
  )
}

export default MediaFiles