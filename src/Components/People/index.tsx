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
  const [activeColumn, setActiveColum] = React.useState<string[]>([])
  const [filters, setFilters] = React.useState<string[]>([])


  const handleOrder = (fName: any) => {
    setOrder(-order)
    setColumn(fName)
  }

  const handleColumn = (event: any) => {
    let nameColumn = event.target.value
    if (activeColumn.indexOf(nameColumn) > -1) {
      setActiveColum(prev => prev.filter((column: any) => column !== nameColumn))
    } else {
      setActiveColum((oldArr: string[]) => [...oldArr, event.target.value])
    }
  }
  const handleFilter = (event: any) => {
    let nameFilter = event.target.value
    if (filters.indexOf(nameFilter) > -1) {
      setFilters(prev => prev.filter((filter: any) => filter !== nameFilter))
    } else {
      setFilters((oldArr: string[]) => [...oldArr, event.target.value])
    }
  }
  var Lenght = data?.person.length
  console.log(filters)

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
            <TopTableOptions >
              <>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('name') ? true : false}
                    value='name'
                    id='name'
                  />
                  <label
                    htmlFor='name'
                  >Nome completo </label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('email') ? true : false}
                    value='email'
                    id='email'
                  />
                  <label
                    htmlFor='email'
                  >E-mail</label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('birth') ? true : false}
                    value='birth'
                    id='birth'
                  />
                  <label
                    htmlFor='birth'
                  >Data de nascimento</label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('phone1') ? true : false}
                    value='phone1'
                    id='phone1'
                  />
                  <label
                    htmlFor='phone1'
                  >Telefones</label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('faixa') ? true : false}
                    value='faixa'
                    id='faixa'
                  />
                  <label
                    htmlFor='faixa'
                  >Faixa etária</label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('age') ? true : false}
                    value='age'
                    id='age'
                  />
                  <label
                    htmlFor='age'
                  >Idade</label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('sex') ? true : false}
                    value='sex'
                    id='sex'
                  />
                  <label
                    htmlFor='sex'
                  >Sexo</label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('address') ? true : false}
                    value='address'
                    id='address'
                  />
                  <label
                    htmlFor='address'
                  >Endereço</label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('zipcode') ? true : false}
                    value='zipcode'
                    id='zipcode'
                  />
                  <label
                    htmlFor='zipcode'
                  >CEP</label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('city') ? true : false}
                    value='city'
                    id='city'
                  />
                  <label
                    htmlFor='city'
                  >Cidade</label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('document1') ? true : false}
                    value='document1'
                    id='document1'
                  />
                  <label
                    htmlFor='document1'
                  >Documento 1</label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('document2') ? true : false}
                    value='document2'
                    id='document2'
                  />
                  <label
                    htmlFor='document2'
                  >Documento 2</label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('marital') ? true : false}
                    value='marital'
                    id='marital'
                  />
                  <label
                    htmlFor='marital'
                  >Estado civil</label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('schooling') ? true : false}
                    value='schooling'
                    id='schooling'
                  />
                  <label
                    htmlFor='schooling'
                  >Escolaridade</label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('spouse') ? true : false}
                    value='spouse'
                    id='spouse'
                  />
                  <label
                    htmlFor='spouse'
                  >Nome do cônjugue</label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('conversion') ? true : false}
                    value='conversion'
                    id='conversion'
                  />
                  <label
                    htmlFor='conversion'
                  >Data de conversão</label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('baptized') ? true : false}
                    value='baptized'
                    id='baptized'
                  />
                  <label
                    htmlFor='baptized'
                  >Batizado</label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('baptismDate') ? true : false}
                    value='baptismDate'
                    id='baptismDate'
                  />
                  <label
                    htmlFor='baptismDate'
                  >Data de batismo</label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('registerDate') ? true : false}
                    value='registerDate'
                    id='registerDate'
                  />
                  <label
                    htmlFor='registerDate'
                  >Criado em</label>
                </Flex>
                <Flex>
                  <Input
                    type='checkbox'
                    onChange={(event) => handleColumn(event)}
                    checked={activeColumn.includes('category') ? true : false}
                    value='category'
                    id='category'
                  />
                  <label
                    htmlFor='category'
                  >Categoria</label>
                </Flex>
              </>
            </TopTableOptions>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    {activeColumn.includes('name') ? null :
                      <Th>
                        <Button onClick={() => handleOrder('name')}> Nome completo <p><BsArrowUp /><BsArrowDown /></p>
                        </Button>
                      </Th>
                    }
                    {activeColumn.includes('email') ? null :
                      <Th><Button onClick={() => handleOrder('email')}>E-mail <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
                    {activeColumn.includes('birth') ? null :
                      <Th><Button onClick={() => handleOrder('birth')}>Data de nascimento <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
                    {activeColumn.includes('phone1') ? null :
                      <Th><Button onClick={() => handleOrder('phone1')}>Telefones <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
                    {activeColumn.includes('faixa') ? null :
                      <Th><Button onClick={() => handleOrder('faixa')}>Faixa etária <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
                    {activeColumn.includes('age') ? null :
                      <Th><Button onClick={() => handleOrder('age')}>Idade <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
                    {activeColumn.includes('sex') ? null :
                      <Th><Button onClick={() => handleOrder('sex')}>Sexo <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
                    {activeColumn.includes('address') ? null :
                      <Th><Button onClick={() => handleOrder('address')}>Endereço <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
                    {activeColumn.includes('zipcode') ? null :
                      <Th><Button onClick={() => handleOrder('zipcode')}>CEP <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
                    {activeColumn.includes('city') ? null :
                      <Th><Button onClick={() => handleOrder('city')}>Cidade <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
                    {activeColumn.includes('document1') ? null :
                      <Th><Button onClick={() => handleOrder('document1')}>Documento 1 <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
                    {activeColumn.includes('document2') ? null :
                      <Th><Button onClick={() => handleOrder('document2')}>Documento 2 <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
                    {activeColumn.includes('marital') ? null :
                      <Th><Button onClick={() => handleOrder('marital')}>Estado civil<p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
                    {activeColumn.includes('schooling') ? null :
                      <Th><Button onClick={() => handleOrder('schooling')}>Escolaridade<p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
                    {activeColumn.includes('spouse') ? null :
                      <Th><Button onClick={() => handleOrder('spouse')}>Nome do cônjuge<p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
                    {activeColumn.includes('conversion') ? null :
                      <Th><Button onClick={() => handleOrder('conversion')}>Data de conversão<p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
                    {activeColumn.includes('baptized') ? null :
                      <Th><Button onClick={() => handleOrder('baptized')}>Batizado<p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
                    {activeColumn.includes('baptismDate') ? null :
                      <Th><Button onClick={() => handleOrder('baptismDate')}>Data de batismo<p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
                    {activeColumn.includes('registerDate') ? null :
                      <Th><Button onClick={() => handleOrder('registerDate')}>Criado em <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
                    {activeColumn.includes('category') ? null :
                      <Th><Button onClick={() => handleOrder('category')}>Categoria <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    }
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

                    return (filters.includes('feminino') && persons.sex === 'feminino')
                      || (filters.includes('masculino') && persons.sex === 'masculino')
                      || (filters.includes('solteiro') && persons.marital === 'solteiro')
                      || (filters.includes('casado') && persons.marital === 'Casado(a)')
                      || (filters.includes('viuvo') && persons.marital === 'Viúvo(a)')
                      || (filters.includes('divorciado') && persons.marital === 'Divorciado(a)')
                      || (filters.includes('outro') && persons.marital === 'Outros')
                      || (filters.includes('maternal') && persons.schooling === 'Maternal')
                      || (filters.includes('infantil') && persons.schooling === 'Educação infantil')
                      || (filters.includes('fundamental') && persons.schooling === 'Ensino fundamental')
                      || (filters.includes('medio') && persons.schooling === 'Ensino medio')
                      || (filters.includes('tecnologo') && persons.schooling === 'Ensino superior - Tecnólogo')
                      || (filters.includes('bacharel') && persons.schooling === 'Ensino superior - Bacharel')
                      || (filters.includes('mestrado') && persons.schooling === 'Ensino superior - Mestrado')
                      || (filters.includes('licenciatura') && persons.schooling === 'Ensino superior - Licenciatura')
                      || (filters.includes('doutorado') && persons.schooling === 'Ensino superior - Doutorado')
                      || (filters.includes('outro') && persons.schooling === 'Outros')
                      || (filters.includes('nenhum') && persons.schooling === 'Nenhum')
                      || (filters.includes('sim') && persons.baptized === 'Sim')
                      || (filters.includes('nao') && persons.baptized === 'Não')
                      ? '' :
                      <Tr key={persons._id}>
                        {activeColumn.includes('name') ? null :
                          <Td><Link to={`/persons/details/${index}`}><pre>{persons.name}</pre></Link></Td>
                        }
                        {activeColumn.includes('email') ? null :
                          <Td>{persons.email}</Td>
                        }
                        {activeColumn.includes('birth') ? null :
                          <Td>{Birth}</Td>
                        }
                        {activeColumn.includes('phone1') ? null :
                          <Td>{persons.phone1},<br />{persons.phone2}</Td>
                        }
                        {activeColumn.includes('faixa') ? null :
                          <Td>{age_group}</Td>
                        }
                        {activeColumn.includes('age') ? null :
                          <Td>{age_now}</Td>
                        }
                        {activeColumn.includes('sex') ? null :
                          <Td>
                            {persons.sex}

                          </Td>
                        }
                        {activeColumn.includes('address') ? null :
                          <Td><pre>{persons.address}</pre></Td>
                        }
                        {activeColumn.includes('zipcode') ? null :
                          <Td>{persons.zipcode}</Td>
                        }
                        {activeColumn.includes('city') ? null :
                          <Td><pre>{persons.city}</pre></Td>
                        }
                        {activeColumn.includes('document1') ? null :
                          <Td>{persons.document1}</Td>
                        }
                        {activeColumn.includes('document2') ? null :
                          <Td>{persons.document2}</Td>
                        }
                        {activeColumn.includes('marital') ? null :
                          <Td>{persons.marital}</Td>
                        }
                        {activeColumn.includes('schooling') ? null :
                          <Td><pre>{persons.schooling}</pre></Td>
                        }
                        {activeColumn.includes('spouse') ? null :
                          <Td>{persons.spouse}</Td>
                        }
                        {activeColumn.includes('conversion') ? null :
                          <Td>{Conversion}</Td>
                        }
                        {activeColumn.includes('baptized') ? null :
                          <Td>{persons.baptized}</Td>
                        }
                        {activeColumn.includes('baptismDate') ? null :
                          <Td>{persons.baptismDate?.split('T')[0]}</Td>
                        }
                        {activeColumn.includes('registerDate') ? null :
                          <Td><pre>{persons.registerDate?.split('T')[0]}</pre></Td>
                        }
                        {activeColumn.includes('category') ? null :
                          <Td><pre>{persons.category}</pre></Td>
                        }
                      </Tr>

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
              <Input placeholder='Buscar'
                type='search' />
              <GroupType>
                <h4>Categorias</h4>
                <InputBlock>
                  <Flex>
                    <Input
                      id='name'
                      value='name'
                      checked={filters.includes('name') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="name">name</label>
                  </Flex>
                </InputBlock>
              </GroupType>
              <GroupType>
                <h4>Sexo</h4>
                <InputBlock>
                  <Flex>
                    <Input
                      id='masculino'
                      value='masculino'
                      checked={filters.includes('masculino') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="masculino">Masculino</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='feminino'
                      value='feminino'
                      checked={filters.includes('feminino') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="feminino">Feminino</label>
                  </Flex>
                </InputBlock>
              </GroupType>
              <GroupType>
                <h4>Estado civil</h4>
                <InputBlock>
                  <Flex>
                    <Input
                      id='solteiro'
                      value='solteiro'
                      checked={filters.includes('solteiro') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="solteiro">Solteiro(a)</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='casado'
                      value='casado'
                      checked={filters.includes('casado') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="casado">Casado(a)</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='viuvo '
                      value='viuvo '
                      checked={filters.includes('viuvo ') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="viuvo">Viúvo(a)</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='divorciado'
                      value='divorciado'
                      checked={filters.includes('divorciado') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="divorciado">Divorciado(a)</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='outro'
                      value='outro'
                      checked={filters.includes('outro') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="outro">Outro</label>
                  </Flex>
                </InputBlock>
              </GroupType>
              <GroupType>
                <h4>Escolaridade</h4>
                <InputBlock>
                  <Flex>
                    <Input
                      id='maternal'
                      value='maternal'
                      checked={filters.includes('maternal') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="maternal">Maternal</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='infantil'
                      value='infantil'
                      checked={filters.includes('infantil') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="infantil">Educação infantil</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='fundamental'
                      value='fundamental'
                      checked={filters.includes('fundamental') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="fundamental">Ensino fundamental</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='medio'
                      value='medio'
                      checked={filters.includes('medio') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="medio">Ensino Médio</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='tecnologo'
                      value='tecnologo'
                      checked={filters.includes('tecnologo') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="tecnologo">Ensino Superior - Tecnólogo</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='bacharel'
                      value='bacharel'
                      checked={filters.includes('bacharel') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="bacharel">Ensino Superior - Bacharel</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='mestrado'
                      value='mestrado'
                      checked={filters.includes('mestrado') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="mestrado">Ensino Superior - Mestrado</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='licenciatura'
                      value='licenciatura'
                      checked={filters.includes('licenciatura') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="licenciatura">Ensino Superior - Licenciatura</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='doutorado'
                      value='doutorado'
                      checked={filters.includes('doutorado') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="doutorado">Ensino Superior - Doutorado</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='outro'
                      value='outro'
                      checked={filters.includes('outro') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="outro">Outro</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='nenhum'
                      value='nenhum'
                      checked={filters.includes('nenhum') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="nenhum">Nenhum</label>
                  </Flex>
                </InputBlock>
              </GroupType>
              <GroupType>
                <h4>Batizado</h4>
                <InputBlock>
                  <Flex>
                    <Input
                      id='sim'
                      value='sim'
                      checked={filters.includes('sim') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="sim">Sim</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='nao'
                      value='nao'
                      checked={filters.includes('nao') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="nao">Não</label>
                  </Flex>
                </InputBlock>
              </GroupType>
              <GroupType>
                <h4>Cargos</h4>
                <InputBlock>
                  <Flex>
                    <Input
                      id='name'
                      value='name'
                      checked={filters.includes('name') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="name">name</label>
                  </Flex>
                </InputBlock>
              </GroupType>
              <GroupType>
                <h4>Faixa etária</h4>
                <InputBlock>
                  <Flex>
                    <Input
                      id='kid'
                      value='kid'
                      checked={filters.includes('kid') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="kid">Crianças</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='ad'
                      value='ad'
                      checked={filters.includes('ad') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="ad">Adolescentes</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='young'
                      value='young'
                      checked={filters.includes('young') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="young">Jovem</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='adult'
                      value='adult'
                      checked={filters.includes('adult') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
                    <label htmlFor="adult">Adultos</label>
                  </Flex>
                  <Flex>
                    <Input
                      id='seniors'
                      value='seniors'
                      checked={filters.includes('seniors') ? true : false}
                      type='checkbox'
                      onChange={(event => handleFilter(event))}
                    />
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