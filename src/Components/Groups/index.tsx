import React from 'react';

import { BsFilter } from 'react-icons/bs';
import Button from '../Button';
import Input from '../Input';
import { Container, Content, Box, BoxHeader, BoxContent, CardsContainer, Card, CardBg, CardImg, Liders, SubLiderImg, LiderImg, Page, Aside, Filters, FilterHeader, FilterOptions, GroupType, InputGroup, Flex } from './styles';


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
              <Card>
                <CardBg>
                  <img src="https://img.freepik.com/vetores-gratis/juventude-plana-pessoas-abracando-juntos_52683-13322.jpg?w=740&t=st=1663693866~exp=1663694466~hmac=e0160b834b8bc53200224a2d0c6e2318b32138fbc2add06e7b49d4837cc5227b" alt="" />
                </CardBg>
                <CardImg>
                  <img src="https://img.freepik.com/fotos-gratis/silhueta-de-empresarios-confiantes_1098-1768.jpg?w=740&t=st=1663694031~exp=1663694631~hmac=f64272ec63e1c95579c7ff1d8c4a60c4ad25cc731cd197077f77135b1062a694" alt="" />
                </CardImg>
                <h4>Group name</h4>
                <p>0 pessoas</p>
                <p>Liderança</p>
                <Liders>
                  <SubLiderImg>
                    <img src="https://img.freepik.com/fotos-gratis/mulher-de-negocios-executivo-em-um-escritorio_1303-16020.jpg?w=740&t=st=1663694328~exp=1663694928~hmac=510f0aaa58d630452c9bd0e7ac087d41af956778c00d5398202f1bb8b83ea1bb" alt="" />
                  </SubLiderImg>
                  <LiderImg>
                    <img src="https://img.freepik.com/fotos-gratis/mulher-de-negocios-executivo-em-um-escritorio_1303-16020.jpg?w=740&t=st=1663694328~exp=1663694928~hmac=510f0aaa58d630452c9bd0e7ac087d41af956778c00d5398202f1bb8b83ea1bb" alt="" />
                  </LiderImg>
                  <SubLiderImg>
                    <img src="https://img.freepik.com/fotos-gratis/mulher-de-negocios-executivo-em-um-escritorio_1303-16020.jpg?w=740&t=st=1663694328~exp=1663694928~hmac=510f0aaa58d630452c9bd0e7ac087d41af956778c00d5398202f1bb8b83ea1bb" alt="" />
                  </SubLiderImg>
                </Liders>
                <Button>Visualizar</Button>
              </Card>
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