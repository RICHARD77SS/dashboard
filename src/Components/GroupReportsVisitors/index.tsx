
import Button from '../Button';
import GraphBars from '../GraphBars';
import Input from '../Input';
import ReportsHeader from '../ReportsHeader';

import { Container, Content,Graph, Block, Flex} from './styles';



const labels = [ 'Frequencia'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Participantes',
      data: [3],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Visitantes',
      data: [ 2],
      backgroundColor:  'rgba(53, 142, 255, 0.5)',
    },
    {
      label: 'Total',
      data: [5 ],
      backgroundColor: 'rgba(253, 162, 235, 0.5)',
    },
  ],
};
const GroupReportsVisitors = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Frequências de Participantes e Visitantes' />
      <Content>
          <Block>
            <Flex>
              <Input type='date' />
              <Button>D</Button>
            </Flex>
          </Block>
        <Graph>
          <GraphBars data={data} />
        </Graph>
      </Content>
    </Container>
  )
}

export default GroupReportsVisitors;