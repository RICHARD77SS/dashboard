
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


const GroupReportsMeetings = () => {
  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Frequências Reuniões' />
      <Content>
        <Top>
          <Block>
            <Flex>
              <Input type='data' />
              <Button>Ativar Filtro de hierarquia</Button>
            </Flex>
          </Block>
          <Flex>
            <Block>
              <label htmlFor="leader1">Líder 1</label>
              <Input placeholder='  Selecione' id='leader1' type='text' list='firstLeader' />
              <datalist id='firstLeader'>
                <option value="Lider name here"></option>
              </datalist>
            </Block>
            <Block>
              <label htmlFor="leader2">Líder 2</label>
              <Input placeholder='  Selecione' id='leader2' type='text' list='secondLeader' />
              <datalist id='secondLeader'>
                <option value="Lider name here"></option>
              </datalist>
            </Block>
            <Block>
              <label htmlFor="leader3">Líder 3</label>
              <Input placeholder='  Selecione' id='leader' type='text' list='thirdLeader' />
              <datalist id='thirdLeader'>
                <option value="Lider name here" ></option>
                <option value="Lider name here" ></option>
              </datalist>
            </Block>
            <Block>
              <label htmlFor="leader4">Líder 4</label>
              <Input placeholder='  Selecione' id='leader4' type='text' list='fourthNumber' />
              <datalist id='fourthNumber'>
                <option value="Lider name here"></option>
              </datalist>
            </Block>
          </Flex>
          <hr />
          <Flex>
            <p>Filtrar por grupo de origem</p>
            <Input id='originGroup' type='text' list='groups' />
            <datalist id='groups'>
              <option value="Group name"></option>

            </datalist>
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
            <Tr>
              <Td>Data here</Td>
              <Td>Grupo here</Td>
              <Td>Pessoas here</Td>
              <Td>Visitantes here</Td>
              <Td>Valor total here</Td>
            </Tr>
          </Tbody>
        </Table>
        <PageSelector />
      </Content>
    </Container>
  )
}

export default GroupReportsMeetings;