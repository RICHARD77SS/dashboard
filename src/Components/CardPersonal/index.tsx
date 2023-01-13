import React from 'react'
import { Link } from 'react-router-dom';
import Box from '../Box';
import BoxContent from '../BoxContent';
import BoxHeader from '../BoxHeader';
import Button from '../Button';
import Container from '../Container';
import EditRemove from '../EditRemove';
import FlexBetween from '../FlexBetween';
import Table from '../Table';
import Tbody from '../Tbody';
import Td from '../Td';
import Th from '../Th';
import Thead from '../Thead';
import Tr from '../Tr';
import { Content } from './styles'
import { PersonalCardContext } from './../../contexts/personalCardContext';
import Flex from '../Flex';


const CardPersonal = () => {
  const { data, handleEdit, handleDelete } = React.useContext(PersonalCardContext)
  return (
    <Container>
      <h3>Cartão pessoal</h3>
      <Content>
        <Box>
          <BoxHeader title='Meus modelos'>
          </BoxHeader>
          <BoxContent>
            <FlexBetween>
              <p>Todos os modelos de cartões pessoais que você cria ou edita ficam disponíveis aqui.</p>
              <Link to='/card'><Button>Criar novo</Button></Link>
            </FlexBetween>
            <Table>
              <Thead>
                <Tr>
                  <Th>Nome do modelo</Th>
                  <Th>Criado em</Th>
                  <Th>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.personalCard.map((card: any, index: number) => {
                  return (
                    <Tr key={index}>
                      <Td>{card.name}</Td>
                      <Td>Data</Td>
                      <Td>
                        <Flex>
                          <Link to='/card'>
                            <Button type='button' onClick={() => {
                              handleEdit(card._id,
                                card.name,
                                card.frontBgColor,
                                card.frontBgImage,
                                card.frontTitleColor,
                                card.frontTextColor,
                                card.frontSpanColor,
                                card.frontPositions,
                                card.backBgImage,
                                card.backBgColor,
                                card.backTitleColor,
                                card.backTextColor,
                                card.backSpanColor,
                                card.backPositions)
                            }}>Editar</Button>
                          </Link>
                          <Button type='button' onClick={() => { handleDelete(card._id) }}>Apagar</Button>
                        </Flex>
                      </Td>
                    </Tr>

                  )
                })}
              </Tbody>
            </Table>
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader>
            <h3>Escolha um Modelo</h3>
          </BoxHeader>
          <BoxContent>
            <p>Escolha um de nossos modelos prontos para usar ou editar</p>
          </BoxContent>
        </Box>
      </Content>

    </Container>
  )
}

export default CardPersonal;