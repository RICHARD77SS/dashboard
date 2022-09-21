import Button from '../Button';
import ReportsHeader from '../ReportsHeader';
import {  Container,Content,Graph } from './styles';


const ReportsBirth = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Aniversariantes' />
      <Content>
        <Graph>

        </Graph>
        <Button>Ir para Página de aniversariantes</Button>
      </Content>
    </Container>
  )
}

export default ReportsBirth;