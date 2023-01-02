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
import Box from '../Box';
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
  const [order, setOrder] = React.useState(1)
  const [column, setColumn] = React.useState('')
  const [activeColumn, setActiveColum] = React.useState<string[]>([])
  const [filters, setFilters] = React.useState<string[]>([])
  const [resultsPage, setResultsPage] = React.useState(20)
  const [initialItem, setInitialItem] = React.useState(0)
  const [finalItem, setFinalItem] = React.useState(resultsPage)
  const [currentPages, setCurrentPages] = React.useState(1)

  const handleOrder = (fName: any) => {
    setOrder(-order)
    setColumn(fName)
  }
  const handleResults = (event: any) => {
    setResultsPage(event.target.value)
  }
  const nextItem = () => {
    setInitialItem(initialItem + resultsPage)
    setFinalItem(finalItem + resultsPage)
    setCurrentPages(currentPages + 1)
  }
  const previousItem = () => {
    setInitialItem(initialItem - resultsPage)
    setFinalItem(finalItem - resultsPage)
    setCurrentPages(currentPages - 1)
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
  let dados = data?.person[0]
  let names = ['Nome', 'E-mail', 'Data De Nascimento', 'Sexo', 'Escolaridade', 'EstadoCivil', 'Documento 1', 'Documento 2', 'Telefones', 'Endereço', 'Bairro', 'CEP', 'Pais', 'Estado', 'Cidade', 'Grupos', 'Categorias', 'Cargo', 'Data de conversão', 'Batizado', 'Data de batismo', 'Criado em ', 'Nome do cônjugue', 'Faixa etária', 'Idade']
  console.log(initialItem, finalItem, resultsPage)
  return (
    <Container>
      <br />
      <br />
      <h2>Pessoas cadastradas</h2>
      <br />
      <Content>
        <Box width='70%'>
          <BoxHeader title={`Resultados:${Lenght}`}>
          </BoxHeader>
          <BoxContent >
            <TopTableOptions value={resultsPage} onChange={(event) => handleResults(event)}>
              <>
                {dados ? Object.keys(dados)
                  .filter((item: any) => item !== '__v'
                    && item !== '_id'
                    && item !== 'password'
                    && item !== 'image'
                    && item !== 'convertedSpouse'
                    && item !== 'notes'
                    && item !== 'phone2'
                    && item !== 'number'
                  ).map((keys: any, index: number) => {
                    return (
                      <Flex key={index}>
                        <Input
                          type='checkbox'
                          onChange={(event) => handleColumn(event)}
                          checked={activeColumn.includes(keys) ? true : false}
                          value={keys}
                          id={keys}
                        />
                        <label
                          htmlFor={keys}
                        >{names[index]}</label>
                      </Flex>

                    )
                  }) : null}
              </>
            </TopTableOptions>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    {dados ? Object.keys(dados).filter((item: any) => item !== '__v'
                      && item !== '_id'
                      && item !== 'password'
                      && item !== 'image'
                      && item !== 'convertedSpouse'
                      && item !== 'notes'
                      && item !== 'phone2'
                      && item !== 'number'
                    ).map((keys: any, index: number) => {
                      return (
                        activeColumn.includes(keys) ? null :
                          <Th key={index}>
                            <Button onClick={() => handleOrder(keys)}>{names[index]}<p><BsArrowUp /><BsArrowDown /></p>
                            </Button>
                          </Th>

                      )
                    }) : null}
                  </Tr>
                </Thead>
                <Tbody>

                  {data?.person?.slice(initialItem, finalItem).map((persons: any, index: any) => {
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
                      || (filters.includes('kid') && persons.ageGroup === 'Criança')
                      || (filters.includes('ad') && persons.ageGroup === 'Adolescente')
                      || (filters.includes('young') && persons.ageGroup === 'Jovem')
                      || (filters.includes('adult') && persons.ageGroup === 'Adulto')
                      || (filters.includes('seniors') && persons.ageGroup === 'Idoso')

                      ? '' :
                      <Tr key={persons._id}>

                        {activeColumn.includes('name') ? null :
                          <Td><Link to={`/persons/details/${index}`}><pre>{persons.name}</pre></Link></Td>
                        }
                        {activeColumn.includes('email') ? null :
                          <Td>{persons.email}</Td>
                        }
                        {activeColumn.includes('birth') ? null :
                          <Td>{persons.birth?.split('T')[0]}</Td>
                        }
                        {activeColumn.includes('sex') ? null :
                          <Td>
                            {persons.sex}
                          </Td>
                        }
                        {activeColumn.includes('schooling') ? null :
                          <Td><pre>{persons.schooling}</pre></Td>
                        }
                        {activeColumn.includes('marital') ? null :
                          <Td>{persons.marital}</Td>
                        }
                        {activeColumn.includes('document1') ? null :
                          <Td>{persons.document1}</Td>
                        }
                        {activeColumn.includes('document2') ? null :
                          <Td>{persons.document2}</Td>
                        }
                        {activeColumn.includes('phone1') ? null :
                          <Td>{persons.phone1},<br />{persons.phone2}</Td>
                        }
                        {activeColumn.includes('address') ? null :
                          <Td><pre>{persons.address}</pre></Td>
                        }
                        {activeColumn.includes('district') ? null :
                          <Td><pre>{persons.district}</pre></Td>
                        }
                        {activeColumn.includes('zipcode') ? null :
                          <Td>{persons.zipcode}</Td>
                        }
                        {activeColumn.includes('country') ? null :
                          <Td><pre>{persons.copuntry}</pre></Td>
                        }
                        {activeColumn.includes('state') ? null :
                          <Td><pre>{persons.state}</pre></Td>
                        }
                        {activeColumn.includes('city') ? null :
                          <Td><pre>{persons.city}</pre></Td>
                        }
                        {activeColumn.includes('group') ? null :
                          <Td><pre>{persons.group}</pre></Td>
                        }
                        {activeColumn.includes('category') ? null :
                          <Td><pre>{persons.category}</pre></Td>
                        }
                        {activeColumn.includes('office') ? null :
                          <Td><pre>{persons.office}</pre></Td>
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
                        {activeColumn.includes('spouse') ? null :
                          <Td>{persons.spouse}</Td>
                        }
                        {activeColumn.includes('ageGroup') ? null :
                          <Td>{persons.ageGroup}</Td>
                        }
                        {activeColumn.includes('age') ? null :
                          <Td>{persons.age}</Td>
                        }
                      </Tr>
                  }).sort((a: any, b: any) => a[column] < b[column] ? -order : order)}
                </Tbody>
              </Table>
            </TableContainer>
            <PageSelector previus={() => { previousItem() }} next={() => { nextItem() }}>{currentPages}</PageSelector>
          </BoxContent>
        </Box>
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