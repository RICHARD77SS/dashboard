import React from 'react';
import { AiOutlineCopy, AiOutlineDownload, AiOutlineEye, AiOutlinePrinter } from 'react-icons/ai';
import { BsArrowDown, BsArrowUp, BsFilter } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';
import Button from '../Button';
import Input from '../Input';



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
            <Page>
              <Button>Anterior</Button>
              <Button>1</Button>
              <Button>Próximo</Button>
            </Page>
          </BoxContent>
        </Box>
        <Aside>
          <Button><GrAdd /></Button>
          <Filters>
            <FilterHeader>
              <BsFilter />
              <h3>Filtros</h3>
            </FilterHeader>
            <FilterOptions>
              <Input type='search' />
              <GroupType>
                <h4>Categorias</h4>
                <InputGroup>
                  <Flex>
                    <label htmlFor="name">name</label>
                    <Input id='name' type='checkbox' />
                  </Flex>
                </InputGroup>
              </GroupType>
              <GroupType>
                <h4>Sexo</h4>
                <InputGroup>
                  <Flex>
                    <label htmlFor="masculino">Masculino</label>
                    <Input id='masculino' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="feminino">Feminino</label>
                    <Input id='feminino' type='checkbox' />
                  </Flex>
                </InputGroup>
              </GroupType>
              <GroupType>
                <h4>Estado civil</h4>
                <InputGroup>
                  <Flex>
                    <label htmlFor="solteiro">Solteiro(a)</label>
                    <Input id='solteiro' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="casado">Casado(a)</label>
                    <Input id='casado' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="viuvo">Viúvo(a)</label>
                    <Input id='viuvo ' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="divorciado">Divorciado(a)</label>
                    <Input id='divorciado' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="outro">Outro</label>
                    <Input id='outro' type='checkbox' />
                  </Flex>
                </InputGroup>
              </GroupType>
              <GroupType>
                <h4>Escolaridade</h4>
                <InputGroup>
                  <Flex>
                    <label htmlFor="maternal">Maternal</label>
                    <Input id='maternal' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="infantil">Educação infantil</label>
                    <Input id='infantil' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="fundamental">Ensino fundamental</label>
                    <Input id='fundamental' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="medio">Ensino Médio</label>
                    <Input id='medio' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="tecnologo">Ensino Superior - Tecnólogo</label>
                    <Input id='tecnologo' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="bacharel">Ensino Superior - Bacharel</label>
                    <Input id='bacharel' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="mestrado">Ensino Superior - Mestrado</label>
                    <Input id='mestrado' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="licenciatura">Ensino Superior - Licenciatura</label>
                    <Input id='licenciatura' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="doutorado">Ensino Superior - Doutorado</label>
                    <Input id='doutorado' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="Outro">Outro</label>
                    <Input id='Outro' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="nenhum">Nenhum</label>
                    <Input id='nenhum' type='checkbox' />
                  </Flex>
                </InputGroup>
              </GroupType>
              <GroupType>
                <h4>Batizado</h4>
                <InputGroup>
                  <Flex>
                    <label htmlFor="sim">Sim</label>
                    <Input id='sim' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="nao">Não</label>
                    <Input id='nao' type='checkbox' />
                  </Flex>
                </InputGroup>
              </GroupType>
              <GroupType>
                <h4>Cargos</h4>
                <InputGroup>
                  <Flex>
                    <label htmlFor="name">name</label>
                    <Input id='name' type='checkbox' />
                  </Flex>
                </InputGroup>
              </GroupType>
              <GroupType>
                <h4>Faixa etária</h4>
                <InputGroup>
                  <Flex>
                    <label htmlFor="kid">Crianças</label>
                    <Input id='kid' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="ad">Adolescentes</label>
                    <Input id='ad' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="young">Jovem</label>
                    <Input id='young' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="adult">Adultos</label>
                    <Input id='adult' type='checkbox' />
                  </Flex>
                  <Flex>
                    <label htmlFor="seniors">idosos</label>
                    <Input id='seniors' type='checkbox' />
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