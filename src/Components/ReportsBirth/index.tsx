import Button from '../Button';
import {  Container,Header,Foto,Block,Content,Graph } from './styles';


const ReportsBirth = () => {
  return (
    <Container>
      <Header>
        <Foto>

        </Foto>
        <Block>
          <h3>Inc Name</h3>
          <h4>Relatorio: Aniversáriantes</h4>
        </Block>
        <Button>Imprimir</Button>
      </Header>
      <Content>
        <Graph>

        </Graph>
        <Button>Ir para Página de aniversariantes</Button>
      </Content>
    </Container>
  )
}

export default ReportsBirth;