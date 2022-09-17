import React from 'react';
import { AiOutlineCopy, AiOutlineDownload, AiOutlineEye, AiOutlinePrinter } from 'react-icons/ai';
import { BsArrowDown, BsArrowUp, BsFilter } from 'react-icons/bs';
import Button from '../Button';
import Input from '../Input';
import { Container, Content, Box, BoxHeader, BoxContent, Top, Results, Options,TableContainer,
   Table, Tr, Th, Td, Page, Aside, Filters, FilterHeader, FilterOptions, GroupType, InputGroup, Flex } from './styles';


const People = () => {
  return (
    <Container>
      <h3>Pessoas</h3>
      <Content>
        <Box>
          <BoxHeader>
            <h3>Resultados: 1</h3>
          </BoxHeader>
          <BoxContent>
            <Top>
              <Results>
                <Input id='result' type='number' />
                <label htmlFor='result'>Resultados por página</label>
              </Results>
              <Options>
                <Button><AiOutlineCopy /></Button>
                <Button><AiOutlineDownload /></Button>
                <Button><AiOutlinePrinter /></Button>
                <Button><AiOutlineEye />Colunas</Button>
              </Options>
            </Top>
            <TableContainer>
              <Table>
                <Tr>
                  <Th><Button>Nome completo <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  <Th><Button>E-mail <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                </Tr>
                <Tr>
                  <Td>Name here</Td>
                  <Td>Email here</Td>
                </Tr>
              </Table>
            </TableContainer>
            <Page>
              <Button>Anterior</Button>
              <Button>1</Button>
              <Button>Próximo</Button>
            </Page>
          </BoxContent>
        </Box>
        <Aside>
          <Button>+Adicionar Pessoas</Button>
          <Filters>
            <FilterHeader>
              <BsFilter />
              <h3>Filtros</h3>
            </FilterHeader>
            <FilterOptions>
              <Input placeholder='Buscar' type='search' />
              <GroupType>
                <h4>Categorias</h4>
                <InputGroup>
                  <Flex>
                    <Input id='name' type='checkbox' />
                    <label htmlFor="name">name</label>
                  </Flex>
                </InputGroup>
              </GroupType>
              <GroupType>
                <h4>Sexo</h4>
                <InputGroup>
                  <Flex>
                    <Input id='masculino' type='checkbox' />
                    <label htmlFor="masculino">Masculino</label>
                  </Flex>
                  <Flex>
                    <Input id='feminino' type='checkbox' />
                    <label htmlFor="feminino">Feminino</label>
                  </Flex>
                </InputGroup>
              </GroupType>
              <GroupType>
                <h4>Estado civil</h4>
                <InputGroup>
                  <Flex>
                    <Input id='solteiro' type='checkbox' />
                    <label htmlFor="solteiro">Solteiro(a)</label>
                  </Flex>
                  <Flex>
                    <Input id='casado' type='checkbox' />
                    <label htmlFor="casado">Casado(a)</label>
                  </Flex>
                  <Flex>
                    <Input id='viuvo ' type='checkbox' />
                    <label htmlFor="viuvo">Viúvo(a)</label>
                  </Flex>
                  <Flex>
                    <Input id='divorciado' type='checkbox' />
                    <label htmlFor="divorciado">Divorciado(a)</label>
                  </Flex>
                  <Flex>
                    <Input id='outro' type='checkbox' />
                    <label htmlFor="outro">Outro</label>
                  </Flex>
                </InputGroup>
              </GroupType>
              <GroupType>
                <h4>Escolaridade</h4>
                <InputGroup>
                  <Flex>
                    <Input id='maternal' type='checkbox' />
                    <label htmlFor="maternal">Maternal</label>
                  </Flex>
                  <Flex>
                    <Input id='infantil' type='checkbox' />
                    <label htmlFor="infantil">Educação infantil</label>
                  </Flex>
                  <Flex>
                    <Input id='fundamental' type='checkbox' />
                    <label htmlFor="fundamental">Ensino fundamental</label>
                  </Flex>
                  <Flex>
                    <Input id='medio' type='checkbox' />
                    <label htmlFor="medio">Ensino Médio</label>
                  </Flex>
                  <Flex>
                    <Input id='tecnologo' type='checkbox' />
                    <label htmlFor="tecnologo">Ensino Superior - Tecnólogo</label>
                  </Flex>
                  <Flex>
                    <Input id='bacharel' type='checkbox' />
                    <label htmlFor="bacharel">Ensino Superior - Bacharel</label>
                  </Flex>
                  <Flex>
                    <Input id='mestrado' type='checkbox' />
                    <label htmlFor="mestrado">Ensino Superior - Mestrado</label>
                  </Flex>
                  <Flex>
                    <Input id='licenciatura' type='checkbox' />
                    <label htmlFor="licenciatura">Ensino Superior - Licenciatura</label>
                  </Flex>
                  <Flex>
                    <Input id='doutorado' type='checkbox' />
                    <label htmlFor="doutorado">Ensino Superior - Doutorado</label>
                  </Flex>
                  <Flex>
                    <Input id='Outro' type='checkbox' />
                    <label htmlFor="Outro">Outro</label>
                  </Flex>
                  <Flex>
                    <Input id='nenhum' type='checkbox' />
                    <label htmlFor="nenhum">Nenhum</label>
                  </Flex>
                </InputGroup>
              </GroupType>
              <GroupType>
                <h4>Batizado</h4>
                <InputGroup>
                  <Flex>
                    <Input id='sim' type='checkbox' />
                    <label htmlFor="sim">Sim</label>
                  </Flex>
                  <Flex>
                    <Input id='nao' type='checkbox' />
                    <label htmlFor="nao">Não</label>
                  </Flex>
                </InputGroup>
              </GroupType>
              <GroupType>
                <h4>Cargos</h4>
                <InputGroup>
                  <Flex>
                    <Input id='name' type='checkbox' />
                    <label htmlFor="name">name</label>
                  </Flex>
                </InputGroup>
              </GroupType>
              <GroupType>
                <h4>Faixa etária</h4>
                <InputGroup>
                  <Flex>
                    <Input id='kid' type='checkbox' />
                    <label htmlFor="kid">Crianças</label>
                  </Flex>
                  <Flex>
                    <Input id='ad' type='checkbox' />
                    <label htmlFor="ad">Adolescentes</label>
                  </Flex>
                  <Flex>
                    <Input id='young' type='checkbox' />
                    <label htmlFor="young">Jovem</label>
                  </Flex>
                  <Flex>
                    <Input id='adult' type='checkbox' />
                    <label htmlFor="adult">Adultos</label>
                  </Flex>
                  <Flex>
                    <Input id='seniors' type='checkbox' />
                    <label htmlFor="seniors">idosos</label>
                  </Flex>
                </InputGroup>
              </GroupType>

            </FilterOptions>
          </Filters>
        </Aside>
      </Content>
    </Container>
  )
}

export default People;