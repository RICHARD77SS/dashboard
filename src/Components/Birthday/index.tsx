import Button from '../Button';
import Input from '../Input';
import { useAxios } from '../../hooks/useAxios';

import { Container, ContainerHeader, Content, Header, BoxContent, Top, Center, Options, Bottom } from './styles';

import { AiOutlineCopy, AiOutlineDownload, AiOutlinePrinter, AiOutlineEye } from 'react-icons/ai';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import Table from '../Table';
import Thead from '../Thead';
import Tr from '../Tr';
import Th from '../Th';
import Tbody from '../Tbody';
import Td from '../Td';
import TabsBirthday from '../TabsBirthday/index';
import Tab from '../Tab';


const Birthday = () => {
  const { data } = useAxios('person')


  return (
    <Container>
      <ContainerHeader>
        <h3>Aniversários</h3>
        <p>Pessoas &gt; Aniversários</p>
      </ContainerHeader>
      <Content>
        <Header>
          <h3>Selecione um mês</h3>
        </Header>
        <BoxContent>
          <TabsBirthday>
            <Tab title={`Jan ${(0)}`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Imagem <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody >

                  {data?.person.map((person: any, index: any) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 1) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  })}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Fev ${(0)}`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Imagem <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.person.map((person: any, index: any) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 2) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  })}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Mar ${(0)}`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Imagem <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.person.map((person: any, index: any) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 3) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  })}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Abr ${(0)}`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Imagem <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.person.map((person: any, index: any) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 4) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  })}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Mai ${(0)}`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Imagem <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.person.map((person: any, index: any) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 5) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  })}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Jun ${(0)}`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Imagem <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.person.map((person: any, index: any) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 6) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  })}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Jul ${(0)}`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Imagem <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.person.map((person: any, index: any) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 7) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  })}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Ago ${(0)}`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Imagem <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.person.map((person: any, index: any) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 8) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  })}

                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Set ${(0)}`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Imagem <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.person.map((person: any, index: any) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 9) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  })}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Out ${(0)}`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Imagem <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.person.map((person: any, index: any) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 10) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  })}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Nov ${(0)}`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Imagem <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.person.map((person: any, index: any) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 11) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  })}
                </Tbody>
              </Table>
            </Tab>
            <Tab title={`Dez ${(0)}`}>
              <Table>
                <Thead>
                  <Tr>
                    <Th><Button>Dia <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Imagem <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                    <Th><Button>Nome <p><BsArrowUp /><BsArrowDown /></p></Button></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.person.map((person: any, index: any) => {
                    const data = new Date(person.birth)
                    const month = data.getMonth() + 1
                    if (month === 12) {

                      return (
                        <Tr key={index}>
                          <Td>{data.toLocaleDateString()}</Td>
                          <Td>Image here</Td>
                          <Td>{person.name}</Td>
                        </Tr>
                      )
                    }

                    return (<></>)
                  })}
                </Tbody>
              </Table>
            </Tab>
          </TabsBirthday>
          <Center>
            <Options>
              <Input type='number' step='20' min='0' max='100' />
              <p>Resultados por página</p>
            </Options>
            <Options>
              <Button><AiOutlineCopy /></Button>
              <Button><AiOutlineDownload /></Button>
              <Button><AiOutlinePrinter /></Button>
              <Button><AiOutlineEye />Colunas</Button>
            </Options>
          </Center>

          <Bottom>
            <Button>Anterior</Button>
            <Button>Proximo</Button>
          </Bottom>
        </BoxContent>
      </Content>
    </Container>
  )
}

export default Birthday;