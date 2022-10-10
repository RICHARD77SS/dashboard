import React from 'react';
import { BsArrowDown, BsArrowUp, BsFilter } from 'react-icons/bs';
import Input from '../Input';
import TopTableOptions from '../TopTableOptions';
import {
  TableContainer, Buttonb, Filters, FilterHeader, FilterOptions, GroupType, InputGroup, Flex,
} from './styles';
import Table from '../Table'
import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';
import Tbody from '../Tbody';
import Td from '../Td';
import PageSelector from '../PageSelector';
import { Link } from 'react-router-dom';
import Container from '../Container';
import Content from '../Content';
import BoxB from '../BoxB';
import BoxHeader from '../BoxHeader';
import BoxContent from '../BoxContent';
import Aside from '../Aside';

import { useAxios } from '../../hooks/useAxios'


const People = () => {
  const { data } = useAxios('person')

  var date = new Date()
  var day = date.getDate()
  var month = date.getMonth() + 1
  var year = date.getFullYear()
  return (
    <Container>
      <br />
      <br />
      <h2>Pessoas cadastradas</h2>
      <br />
      <Content>
        <BoxB>
          <BoxHeader title='Resultados: 1'>
          </BoxHeader>
          <BoxContent>
            <TopTableOptions />
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Nome completo <p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>E-mail <p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Data de nascimento <p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Telefones <p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Faixa etária <p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Idade <p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Sexo <p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Endereço <p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>CEP <p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Cidade <p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Documento 1 <p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Documento 2 <p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Estado civil<p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Escolaridade<p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Nome do cônjuge<p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Data de conversão<p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Data de batismo<p><BsArrowUp /><BsArrowDown /></p></Th>
                    <Th>Criado em <p><BsArrowUp /><BsArrowDown /></p></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.person?.map((persons: any, index: any) => {
                    var birthday = new Date(persons.birth)

                    var age_now = year - birthday.getFullYear()
                    var mont = month - birthday.getMonth()
                    if (mont < 0 || (mont === 0 && day < birthday.getDate())) {
                      age_now--;
                    }

                    var baptizeds = persons.baptized
                    if (baptizeds === true) {
                      baptizeds = "Sim"
                    } else {
                      baptizeds = "Não"
                    }

                    var age_group = ''

                    if (age_now >= 0 && age_now <= 12) {
                      age_group = "Criança"
                    }
                    if (age_now >= 12 && age_now <= 18) {
                      age_group = "Jovem"
                    }
                    if (age_now >= 18 && age_now <= 28) {
                      age_group = "Jovem"
                    }
                    if (age_now >= 28 && age_now <= 55) {
                      age_group = "Adulto"
                    }
                    if (age_now >= 55 && age_now <= 145) {
                      age_group = "Idoso"
                    }

                    return (
                      <Tr key={persons._id}>
                        <Td><Link to={`/persons/details/${index}`}><pre>{persons.name}</pre></Link></Td>
                        <Td>{persons.email}</Td>
                        <Td>{persons.birth}</Td>
                        <Td>{persons.phone1},{persons.phone2}</Td>
                        <Td>{age_group}</Td>
                        <Td>{age_now}</Td>
                        <Td>{persons.sex}</Td>
                        <Td>{persons.address}</Td>
                        <Td>{persons.zipcode}</Td>
                        <Td>{persons.city}</Td>
                        <Td>{persons.document1}</Td>
                        <Td>{persons.document2}</Td>
                        <Td>{persons.marital}</Td>
                        <Td>{persons.schooling}</Td>
                        <Td>{persons.name}</Td>
                        <Td>{persons.conversion}</Td>
                        <Td>{baptizeds}</Td>
                        <Td>{persons.conversion}</Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>
            </TableContainer>
            <PageSelector />
          </BoxContent>
        </BoxB>
        <Aside>
          <Buttonb><Link to='/addpeople'>+Adicionar Pessoas</Link></Buttonb>
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