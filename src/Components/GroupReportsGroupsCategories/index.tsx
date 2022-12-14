
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
import { useAxios } from '../../hooks/useAxios';


const GroupReportsGroupsCategories = () => {

  const { data: groupCategory } = useAxios('groupCategory')
  const { data: dataGroups } = useAxios('groups')

  let label = groupCategory?.groupCategory.map((name: any) => name.name)

  let groupCategoryValues = label?.map((labels: any) => {
    return dataGroups?.groups.map((groups: any) => groups.category).flat(1).filter((category: any) => category === labels).length
  })

  const PieData = {

    labels: label,
    datasets: [
      {
        labels: '# of Votes',
        data: groupCategoryValues,
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
          {label.map((label: any, index: number) => {
            let values = groupCategoryValues.map((values: any) => {
              return values
            })
            return (
              <Tr key={index}>
                <Td>{label}</Td>
                <Td>{values[index]}</Td>
              </Tr>
            )
          })}

        </Tbody>
      </Table>
      <PageSelector />
    </Container>
  )
}

export default GroupReportsGroupsCategories;