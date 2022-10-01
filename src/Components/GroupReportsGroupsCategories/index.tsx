
import Button from '../Button';
import ReportsHeader from '../ReportsHeader';

import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';
import Tbody from '../Tbody';
import Td from '../Td';

import { Container, Graph } from './styles';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import Table from '../Table';
import PageSelector from '../PageSelector';
import GraphPieArea from '../GraphPieArea';

const children = 5
const teenagers = 5
const youth = 5
const adults = 5
const couples = 5
const families = 5
const newcat = 5

const PieData = {
  labels: ['Crianças', 'Adolescentes', 'Jovens', 'Adultos', 'Casais', 'Famílias', 'New categorie'],
  datasets: [
    {
      labels: '# of Votes',
      data: [children, teenagers, youth, adults, couples, families, newcat],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const GroupReportsGroupsCategories = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Novos Grupos' />
      <Graph>
        <GraphPieArea data={PieData} />
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
            <Td>Crianças</Td>
            <Td>{children}</Td>
          </Tr>
          <Tr>
            <Td>Adolescentes</Td>
            <Td>{teenagers}</Td>
          </Tr>
          <Tr>
            <Td>Jovens</Td>
            <Td>{youth}</Td>
          </Tr>
          <Tr>
            <Td>Adultos</Td>
            <Td>{adults}</Td>
          </Tr>
          <Tr>
            <Td>Casais</Td>
            <Td>{couples}</Td>
          </Tr>
          <Tr>
            <Td>Familias</Td>
            <Td>{families}</Td>
          </Tr>
          <Tr>
            <Td>New categorie</Td>
            <Td>{newcat}</Td>
          </Tr>
        </Tbody>
      </Table>
      <PageSelector />
    </Container>
  )
}

export default GroupReportsGroupsCategories;