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

  const {
    filterGroup,
    filterGroupHandler,
    filterLider1,
    filterLider1Handler,
    filterLider2,
    filterLider2Handler,
    filterLider3,
    filterLider3Handler,
    filterLider4,
    filterLider4Handler,
    period,
    filterPeriodHandler
  } = React.useContext(GroupsContext)

  let periodo = new Date(period)
  let PeriodoMonthMin = periodo.getMonth() + 1
  let PeriodoMonthMax = periodo.getMonth() + 1


  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Frequências Reuniões' />
      <Content>
        <Top>
          <Block>
            <label htmlFor="periodo">Escolha o mês da reunião</label>
            <Input
              id='periodo'
              type='date'
              value={period}
              onChange={filterPeriodHandler}
            />
          </Block>
          <h3>Filtrar por liderança</h3>
          <Flex>
            <Block>
              <label htmlFor="leader1">Líder 1</label>
              <select
                id='leader1'
                title='leader'
                value={filterLider1}
                onChange={filterLider1Handler}
              >
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
              <select
                title='leader'
                id='leader2'
                value={filterLider2}
                onChange={filterLider2Handler}
              >
                <option value=""></option>
                {dataGroups?.groups?.map((groups: any, index: number) => {
                  return (
                    <option key={index} value={groups.lider2.name}>{groups.lider2.name}</option>
                  )
                })}
              </select>
            </Block>
            <Block>
              <label htmlFor="leader3">Líder 3</label>
              <select
                title='leader'
                id='leader3'
                value={filterLider3}
                onChange={filterLider3Handler}
              >
                <option value=""></option>
                {dataGroups?.groups?.map((groups: any, index: number) => {
                  return (
                    <option key={index} value={groups.lider3.name}>{groups.lider3.name}</option>
                  )
                })}
              </select>
            </Block>
            <Block>
              <label htmlFor="leader4">Líder 4</label>
              <select
                title='leader'
                id='leader4'
                value={filterLider4}
                onChange={filterLider4Handler}
              >
                <option value=""> </option>
                {dataGroups?.groups?.map((groups: any, index: number) => {
                  return (
                    <option key={index} value={groups.lider4.name}>{groups.lider4.name}</option>
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
              : filterLider1 || filterLider2 || filterLider3 || filterLider4 ? dataMeetings?.meetings.map((meetings: any, index: number) => {

                return dataGroups?.groups.map((groups: any, index: number) => {
                  return filterLider1 && !filterLider2 && !filterLider3 ? groups.lider1.name === filterLider1 ? groups.name : -1

                    : filterLider1 && filterLider2 && !filterLider3 && !filterLider4 ? groups.lider1.name === filterLider1 && groups.lider2.name === filterLider2 ? groups.name : -1

                      : !filterLider1 && filterLider2 && !filterLider3 && !filterLider4 ? groups.lider2.name === filterLider2 ? groups.name : -1

                        : !filterLider1 && filterLider2 && filterLider3 && !filterLider4 ? groups.lider2.name === filterLider2 && groups.lider3.name === filterLider3 ? groups.name : -1

                          : !filterLider1 && !filterLider2 && filterLider3 && !filterLider4 ? groups.lider3.name === filterLider3 ? groups.name : -1

                            : !filterLider1 && !filterLider2 && filterLider3 && filterLider4 ? groups.lider3.name === filterLider3 && groups.lider4.name === filterLider4 ? groups.name : -1

                              : !filterLider1 && !filterLider2 && filterLider4 && !filterLider3 ? groups.lider4.name === filterLider4 ? groups.name : -1

                                : filterLider1 && filterLider2 && filterLider3 && !filterLider4 ?
                                  groups.lider1.name === filterLider1 && groups.lider2.name === filterLider2 && groups.lider3.name === filterLider3 ? groups.name : -1

                                  : filterLider1 && filterLider2 && filterLider3 && filterLider4 ?
                                    groups.lider1.name === filterLider1 && groups.lider2.name === filterLider2 && groups.lider3.name === filterLider3 && groups.lider4.name === filterLider4 ? groups.name : -1

                                    : filterLider1 && !filterLider2 && filterLider3 && filterLider4 ?
                                      groups.lider1.name === filterLider1 && groups.lider3.name === filterLider3 && groups.lider4.name === filterLider4 ? groups.name : -1

                                      : filterLider1 && !filterLider2 && !filterLider3 && filterLider4 ?
                                        groups.lider1.name === filterLider1 && groups.lider4.name === filterLider4 ? groups.name : -1

                                        : !filterLider1 && filterLider2 && !filterLider3 && filterLider4 ?
                                          groups.lider2.name === filterLider2 && groups.lider4.name === filterLider4 ? groups.name : -1

                                          : filterLider1 && !filterLider2 && filterLider3 && !filterLider4 ?
                                            groups.lider1.name === filterLider1 && groups.lider3.name === filterLider3 ? groups.name : -1

                                            : filterLider1 && filterLider2 && !filterLider3 && filterLider4 ?
                                              groups.lider1.name === filterLider1 && groups.lider2.name === filterLider2 && groups.lider4.name === filterLider4 ? groups.name : -1

                                              : null
                })
                  .filter((gpName: any) => gpName !== -1).includes(meetings.group) ?
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
                  console.log(new Date(meetings.date.split('T')[0]).getMonth() + 1)
                  return new Date(meetings.date.split('T')[0]).getMonth() + 1 >= PeriodoMonthMin && new Date(meetings.date.split('T')[0]).getMonth() + 1 <= PeriodoMonthMax ?
                    <Tr key={index}>
                      <Td>{meetings.date.split('T')[0]}</Td>
                      <Td>{meetings.group}</Td>
                      <Td>{meetings.participants.length}</Td>
                      <Td>{meetings.visitors.length}</Td>
                      <Td>{formatter.format(meetings.value)}</Td>
                    </Tr>
                    : null
                })}
          </Tbody>
        </Table>
        <PageSelector />
      </Content>
    </Container>
  )
}

export default GroupReportsMeetings;