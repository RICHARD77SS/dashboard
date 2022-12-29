import React from 'react';
import { BsArrowDown, BsArrowUp, BsFilter } from 'react-icons/bs';
import Input from '../Input';
import TopTableOptions from '../TopTableOptions';
import { Buttonb, Filters, FilterHeader, FilterOptions, GroupType } from './styles';
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
import TableContainer from '../TableContainer';
import InputBlock from '../InputBlock';
import Button from '../Button';
import Flex from '../Flex';


const People = () => {
  const { data } = useAxios('person')

  var date = new Date()
  var day = date.getDate()
  var month = date.getMonth() + 1
  var year = date.getFullYear()

  const [order, setOrder] = React.useState(1)
  const [column, setColumn] = React.useState('')

  const handleOrder = (fName: any) => {
    setOrder(-order)
    setColumn(fName)
  }

  var Lenght = data?.person.length

  return (
    <Container>
      <br />
      <br />
      <h2>Pessoas cadastradas</h2>
      <br />
      <Content>
        <BoxB>
          <BoxHeader title={`Resultados:${Lenght}`}>
          </BoxHeader>
          <BoxContent >
            <TopTableOptions />
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button onClick={() => handleOrder('name')}> Nome completo <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('email')}>E-mail <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('birth')}>Data de nascimento <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('phone1')}>Telefones <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('birth')}>Faixa etária <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('birth')}>Idade <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('sex')}>Sexo <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('address')}>Endereço <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('zipcode')}>CEP <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('city')}>Cidade <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('document1')}>Documento 1 <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('document2')}>Documento 2 <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('marital')}>Estado civil<p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('schooling')}>Escolaridade<p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('spouse')}>Nome do cônjuge<p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('Conversion')}>Data de conversão<p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('baptized')}>Batizado<p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('baptismDate')}>Data de batismo<p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('registerDate')}>Criado em <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button onClick={() => handleOrder('category')}>Categoria <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
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
                    let Birth = birthday.toLocaleDateString()
                    let ConversionDate = new Date(persons.conversion)
                    let Conversion = ConversionDate.toLocaleDateString()

                    return (
                      <Tr key={persons._id}>
                        <Td><Link to={`/persons/details/${index}`}><pre>{persons.name}</pre></Link></Td>
                        <Td>{persons.email}</Td>
                        <Td>{Birth}</Td>
                        <Td>{persons.phone1},<br />{persons.phone2}</Td>
                        <Td>{age_group}</Td>
                        <Td>{age_now}</Td>
                        <Td>{persons.sex}</Td>
                        <Td><pre>{persons.address}</pre></Td>
                        <Td>{persons.zipcode}</Td>
                        <Td><pre>{persons.city}</pre></Td>
                        <Td>{persons.document1}</Td>
                        <Td>{persons.document2}</Td>
                        <Td>{persons.marital}</Td>
                        <Td><pre>{persons.schooling}</pre></Td>
                        <Td>{persons.spouse}</Td>
                        <Td>{Conversion}</Td>
                        <Td>{persons.baptized}</Td>
                        <Td>{persons.baptismDate?.split('T')[0]}</Td>
                        <Td><pre>{persons.registerDate?.split('T')[0]}</pre></Td>
                        <Td><pre>{persons.category}</pre></Td>
                      </Tr>
                    )
                  }).sort((a: any, b: any) => a[column] < b[column] ? -order : order)}
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
                <InputBlock>
                  <Flex>
                    <Input id='name' type='checkbox' />
                    <label htmlFor="name">name</label>
                  </Flex>
                </InputBlock>
              </GroupType>
              <GroupType>
                <h4>Sexo</h4>
                <InputBlock>
                  <Flex>
                    <Input id='masculino' type='checkbox' />
                    <label htmlFor="masculino">Masculino</label>
                  </Flex>
                  <Flex>
                    <Input id='feminino' type='checkbox' />
                    <label htmlFor="feminino">Feminino</label>
                  </Flex>
                </InputBlock>
              </GroupType>
              <GroupType>
                <h4>Estado civil</h4>
                <InputBlock>
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
                </InputBlock>
              </GroupType>
              <GroupType>
                <h4>Escolaridade</h4>
                <InputBlock>
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
                </InputBlock>
              </GroupType>
              <GroupType>
                <h4>Batizado</h4>
                <InputBlock>
                  <Flex>
                    <Input id='sim' type='checkbox' />
                    <label htmlFor="sim">Sim</label>
                  </Flex>
                  <Flex>
                    <Input id='nao' type='checkbox' />
                    <label htmlFor="nao">Não</label>
                  </Flex>
                </InputBlock>
              </GroupType>
              <GroupType>
                <h4>Cargos</h4>
                <InputBlock>
                  <Flex>
                    <Input id='name' type='checkbox' />
                    <label htmlFor="name">name</label>
                  </Flex>
                </InputBlock>
              </GroupType>
              <GroupType>
                <h4>Faixa etária</h4>
                <InputBlock>
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
                </InputBlock>
              </GroupType>
            </FilterOptions>
          </Filters>
        </Aside>
      </Content>
    </Container>
  )
}

export default People;