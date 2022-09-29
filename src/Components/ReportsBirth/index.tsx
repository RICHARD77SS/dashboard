import Button from '../Button';
import GraphBars from '../GraphBars';
import ReportsHeader from '../ReportsHeader';
import {  Container,Graph } from './styles';

const labels = ['Janeiro', 'Fevereiro', 'Maço', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Total',
      data: [1, 0, 0, 0, 0, 2, 0,1,1,1,0,3],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const ReportsBirth = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Aniversariantes' />
        <Graph> 
          <GraphBars data={data} />
        </Graph>
      <Button>Ir para Página de aniversariantes</Button>
      <br />
      <br />
      <br />
    </Container>
  )
}

export default ReportsBirth;