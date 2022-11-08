import React from 'react'
import Button from '../Button';
import Input from '../Input';
import ReportsHeader from '../ReportsHeader';
import TopTableOptions from '../TopTableOptions';
import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';
import Tbody from '../Tbody';
import Td from '../Td';

import { Container, Content, Top, Block, Flex } from './styles';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import Table from '../Table';
import PageSelector from '../PageSelector';
import { useAxios } from '../../hooks/useAxios';
import { formatter } from '../../utils/formatMoneyBr';
import { GroupsContext } from '../../contexts/groupsContext';


const GroupReportsMeetings = () => {
  const { data: dataMeetings } = useAxios('meetings')
  const { data: dataGroups } = useAxios('groups')

  const { filterGroup, filterGroupHandler } = React.useContext(GroupsContext)
  console.log(dataMeetings?.meetings.map((meetings: any, index: number) => {
    return meetings.group
  }).includes(filterGroup))
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Frequências Reuniões' />
      <Content>
        <Top>
          <Block>
            <Input type='date' />
            <Button>Ativar Filtro de hierarquia</Button>
          </Block>
          <Flex>
            <Block>
              <label htmlFor="leader1">Líder 1</label>
              <select id='leader1' title='leader' >
                <option value=""></option>
                {dataGroups?.groups?.map((groups: any, index: number) => {
                  return (
                    <option key={index} value={groups.lider1.name}>{groups.lider1.name}</option>
                  )
                })}
              </select>
            </Block>
            <Block>
              <label htmlFor="leader2">Líder 2</label>
              <select title='leader' id='leader2'>
                <option value=""></option>
                {dataGroups?.groups?.map((groups: any, index: number) => {
                  return (
                    <option key={index} value={groups.lider1.name}>{groups.lider1.name}</option>
                  )
                })}
              </select>
            </Block>
            <Block>
              <label htmlFor="leader3">Líder 3</label>
              <select title='leader' id='leader3'>
                <option value=""></option>
                {dataGroups?.groups?.map((groups: any, index: number) => {
                  return (
                    <option key={index} value={groups.lider1.name}>{groups.lider1.name}</option>
                  )
                })}
              </select>
            </Block>
            <Block>
              <label htmlFor="leader4">Líder 4</label>
              <select title='leader' id='leader4'>
                <option value=""> </option>
                {dataGroups?.groups?.map((groups: any, index: number) => {
                  return (
                    <option key={index} value={groups.lider1.name}>{groups.lider1.name}</option>
                  )
                })}
              </select>
            </Block>
          </Flex>
          <hr />
          <Flex>
            <p>Filtrar por grupo de origem</p>
            <select title='groups' id='groups' value={filterGroup} onChange={filterGroupHandler}>
              <option value=""></option>
              {dataGroups?.groups?.map((groups: any, index: number) => {
                return (
                  <option key={index} value={groups.name}>{groups.name}</option>
                )
              })}
            </select>
          </Flex>
        </Top>
        <TopTableOptions />
        <Input placeholder=' Buscar' type='search' />
        <Table>
          <Thead>
            <Tr>
              <Th><Button>Data <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
              <Th><Button>Grupo <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
              <Th><Button>Pessoas <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
              <Th><Button>Visitantes <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
              <Th><Button>Valor total <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
            </Tr>
          </Thead>
          <Tbody>
            {filterGroup ?
              dataMeetings?.meetings.map((meetings: any, index: number) => {

                return meetings.group.includes(filterGroup) ?
                  <Tr key={index}>
                    <Td>{meetings.date.split('T')[0]}</Td>
                    <Td>{meetings.group}</Td>
                    <Td>{meetings.participants.length}</Td>
                    <Td>{meetings.visitors.length}</Td>
                    <Td>{formatter.format(meetings.value)}</Td>
                  </Tr>
                  : null
              })
              : dataMeetings?.meetings.map((meetings: any, index: number) => {
                return (
                  <Tr key={index}>
                    <Td>{meetings.date.split('T')[0]}</Td>
                    <Td>{meetings.group}</Td>
                    <Td>{meetings.participants.length}</Td>
                    <Td>{meetings.visitors.length}</Td>
                    <Td>{formatter.format(meetings.value)}</Td>
                  </Tr>
                )
              })}
          </Tbody>
        </Table>
        <PageSelector />
      </Content>
    </Container>
  )
}

export default GroupReportsMeetings;