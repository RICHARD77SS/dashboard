import { Link } from "react-router-dom"
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
import Tr from "../Tr"

import { Content, FlexBetween } from './styles'

const MediaDocuments = () => {
  return (
    <Container>
      <Content>
        <Box>
          <BoxHeader title='Meus modelos' />
          <BoxContent>
            <FlexBetween>
              <p>Aqui ficam seus modelos de documentos personalizados.</p>
              <Link to='/documenteditor'><Button>Criar novo</Button></Link>
            </FlexBetween>
            <br />
            <br />
            <Table>
              <Thead>
                <Tr>
                  <Th>Nome do documento</Th>
                  <Th>Gerar documento</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Document name</Td>
                  <Td>Document</Td>
                </Tr>
              </Tbody>
            </Table>
          </BoxContent>

        </Box>
        <br />
        <br />
        <Box>
          <BoxHeader title='Meus modelos' />
          <BoxContent>
            <p>Utilize nossos modelos prontos para gerar documentos ou copie e personalize como você desejar.</p>
            <br />
            <br />
            <Table>
              <Thead>
                <Tr>
                  <Th>Nome do Modelo</Th>
                  <Th>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Model name</Td>
                  <Td><Button>Copiar</Button></Td>
                </Tr>
              </Tbody>
            </Table>
          </BoxContent>
        </Box>
      </Content>
    </Container>
  )
}

export default MediaDocuments