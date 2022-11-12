
import Button from '../Button';
import Input from '../Input';
import ReportsHeader from '../ReportsHeader';
import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';
import Tbody from '../Tbody';
import Td from '../Td';

import { Container, Content, Top, Block } from './styles';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import Table from '../Table';
import PageSelector from '../PageSelector';
import { useAxios } from '../../hooks/useAxios';


const GroupReportsNoGroups = () => {
  const { data } = useAxios('person')
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Frequências Pessoas Sem grupos' />
      <Content>
        <Top>
          <Block>
            <Input type='date' />
          </Block>
          <h3>Resultados: 1</h3>
          <p>Estes dados são abastecidos de acordo com o envio de reunião dos líderes de grupos.</p>
        </Top>
        <Table>
          <Thead>
            <Tr>
              <Th><Button>Foto <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
              <Th><Button>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.person.map((person: any) => {
              console.log(person.group.length)
              return person.group.length === 0 ?
                <Tr>
                  <Td><img src={person.image} alt="" /></Td>
                  <Td>{person.name}</Td>
                </Tr> : null
            })}

          </Tbody>
        </Table>
        <PageSelector />
      </Content>
    </Container>
  )
}

export default GroupReportsNoGroups;