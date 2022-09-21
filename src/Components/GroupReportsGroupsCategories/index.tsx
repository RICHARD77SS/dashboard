
import Button from '../Button';
import ReportsHeader from '../ReportsHeader';

import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';
import Tbody from '../Tbody';
import Td from '../Td';

import { Container, Content, Top, Flex, Graph, Classification, BoxColor } from './styles';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import Table from '../Table';
import PageSelector from '../PageSelector';


const GroupReportsGroupsCategories = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Novos Grupos' />
      <Content>
        <Top>
          <Flex>
            <Classification>
              <BoxColor className='a'></BoxColor>
              <p>Crianças</p>
            </Classification>
            <Classification>
              <BoxColor className='b'></BoxColor>
              <p>Adolescentes</p>
            </Classification>
            <Classification>
              <BoxColor className='c'></BoxColor>
              <p>Jovens</p>
            </Classification>
            <Classification>
              <BoxColor className='d'></BoxColor>
              <p>Adultos</p>
            </Classification>
            <Classification>
              <BoxColor className='f'></BoxColor>
              <p>Casais</p>
            </Classification>
            <Classification>
              <BoxColor className='g'></BoxColor>
              <p>Famílias</p>
            </Classification>
            <Classification>
              <BoxColor className='h'></BoxColor>
              <p>Novo grupo</p>
            </Classification>
          </Flex>          
        </Top>
        <Graph>

        </Graph>
        <Table>
          <Thead>
            <Tr>
              <Th><Button>Nome do grupo <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
              <Th><Button>Total de pessoas <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Grupo name</Td>
              <Td>0</Td>
            </Tr>
          </Tbody>
        </Table>
        <PageSelector />
      </Content>
    </Container>
  )
}

export default GroupReportsGroupsCategories;