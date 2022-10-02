import React from 'react';

import { BsFilter } from 'react-icons/bs';
import Button from '../Button';
import Input from '../Input';
import { Container, Content, Box, BoxHeader, BoxContent, CardsContainer,  Page, Aside, Filters, FilterHeader, FilterOptions, GroupType, InputGroup, Flex } from './styles';


const Group = () => {
  return (
    <Container>
      <h3>Grupos</h3>
      <Content>
        <Box>
          <BoxHeader>
            <h3>Resultados: 1</h3>
          </BoxHeader>
          <BoxContent>
            <CardsContainer>
             
            </CardsContainer>
            <Page>
              <Button>Anterior</Button>
              <Button>1</Button>
              <Button>Próximo</Button>
            </Page>
          </BoxContent>
        </Box>
        <Aside>
          <Button>+Adicionar Grupo</Button>
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
                    <Input id='familias' type='checkbox' />
                    <label htmlFor="familias">Familias</label>
                  </Flex>
                  <Flex>
                    <Input id='casais' type='checkbox' />
                    <label htmlFor="casais">Casais</label>
                  </Flex>
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
                  <Flex>
                    <Input id='ambos' type='checkbox' />
                    <label htmlFor="ambos">Ambos</label>
                  </Flex>
                </InputGroup>
              </GroupType>
              <GroupType>
                <h4>Dia da semana</h4>
                <InputGroup>
                  <Flex>
                    <Input id='domingo' type='checkbox' />
                    <label htmlFor="domingo">Domingo</label>
                  </Flex>
                  <Flex>
                    <Input id='segunda-feira' type='checkbox' />
                    <label htmlFor="segunda-feira">Segunda-feira</label>
                  </Flex>
                  <Flex>
                    <Input id='terca-feira' type='checkbox' />
                    <label htmlFor="terca-feira">Terça-feira</label>
                  </Flex>
                  <Flex>
                    <Input id='quarta-feira' type='checkbox' />
                    <label htmlFor="quarta-feira">Quarta-feira</label>
                  </Flex>
                  <Flex>
                    <Input id='quinta-feira' type='checkbox' />
                    <label htmlFor="quinta-feira">Quinta-feira</label>
                  </Flex>
                  <Flex>
                    <Input id='sexta-feira' type='checkbox' />
                    <label htmlFor="sexta-feira">Sexta-feira</label>
                  </Flex>
                  <Flex>
                    <Input id='sabado' type='checkbox' />
                    <label htmlFor="sabado">Sábado</label>
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

export default Group;