
import Button from '../Button';
import Input from '../Input';
import ReportsHeader from '../ReportsHeader';

import { Container, Content,Graph, Block, Flex, Classification, BoxColor } from './styles';




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
        <Flex>
          <Classification>
            <BoxColor className='a'></BoxColor>
            <p>Partícipantes</p>
          </Classification>
          <Classification>
            <BoxColor className='b'></BoxColor>
            <p>Visitantes</p>
          </Classification>
          <Classification>
            <BoxColor className='c'></BoxColor>
            <p>total</p>
          </Classification>
        </Flex>
        <Graph>

        </Graph>
      </Content>
    </Container>
  )
}

export default GroupReportsVisitors;