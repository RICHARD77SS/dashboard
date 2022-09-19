import React from 'react'
import Button from '../Button';
import { Container, Content, Box, BoxHeader, BoxContent, Top, Table, THead, Tr, Th, TBody, Td } from './styles'


const CardPersonal = () => {
  return (
    <Container>
      <h3>Cartão pessoal</h3>
      <Content>
        <Box>
          <BoxHeader>
            <h3>Meus modelos</h3>
          </BoxHeader>
          <BoxContent>
            <Top>
              <p>Todos os modelos de cartões pessoais que você cria ou edita ficam disponíveis aqui.</p>
              <Button>Criar novo</Button>
            </Top>
            <Table>
              <THead>
                <Tr>
                  <Th>Nome do modelo</Th>
                  <Th>Criado em</Th>
                  <Th>Atualizado em</Th>
                  <Th>Ações</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td>Model Name</Td>
                  <Td>Data</Td>
                  <Td>Data</Td>
                  <Td><Button>Editar</Button><Button>Remover</Button></Td>
                </Tr>
              </TBody>
            </Table>
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader>
            <h3>Escolha um Modelo</h3>
          </BoxHeader>
          <BoxContent>
            <Top>
              <p>Escolha um de nossos modelos prontos para usar ou editar</p>
            </Top>
            
          </BoxContent>
        </Box>
      </Content>

    </Container>
  )
}

export default CardPersonal;