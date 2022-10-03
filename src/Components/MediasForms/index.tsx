import React from 'react'
import { BiCopyAlt, BiLeftArrow } from 'react-icons/bi';
import { BsPencilSquare } from 'react-icons/bs';
import { MdFormatAlignCenter } from 'react-icons/md';
import Aside from '../Aside';
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import Flex from '../Flex';
import FlexBetween from '../FlexBetween';
import GraphPieArea from '../GraphPieArea';
import Input from '../Input';
import InputBlock from '../InputBlock';
import PageSelector from '../PageSelector';
import Table from '../Table';
import Tbody from '../Tbody';
import Td from '../Td';
import Th from '../Th';
import Thead from '../Thead';
import TopTableOptions from '../TopTableOptions';
import Tr from '../Tr';

import { AsideContent, FormContainer, Span } from './styles';


const PieDataForms = {
  labels: ['Resposta1', 'Resposta 2'],
  datasets: [
    {
      labels: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const MediaForms = () => {
  const [form, setForm] = React.useState(false)

  return (
    <Container>
      <h3>Formulários</h3>
      <Content>
        <Box>
          <BoxHeader title='Resumo'>
            <Flex>
              <Button><BiLeftArrow /></Button>
              <Button><BsPencilSquare /> Editar</Button>
              <Button><MdFormatAlignCenter />Ver Formulario</Button>
              <Button><BiCopyAlt />Copiar link</Button>
            </Flex>
          </BoxHeader>
          <BoxContent>
            <FlexBetween>
              <InputBlock>
                <p>Título</p>
                <p><b>Form Title</b></p>
              </InputBlock>
              <InputBlock>
                <p>Título</p>
                <Span>Published</Span>
              </InputBlock>
              <InputBlock>
                <p>Criado em</p>
                <p><b>02/10/2022</b></p>
              </InputBlock>
            </FlexBetween>
            <br />
          </BoxContent>
        </Box>
        <Aside>
          <AsideContent>
            <h2>0</h2>
            <p>Enviados</p>
          </AsideContent>
        </Aside>
      </Content>
      <Box>
        <BoxHeader title='Formulario de teste 1'>

        </BoxHeader>
        <BoxContent>
          <p>Respostas</p>
          <FormContainer>
            <GraphPieArea data={PieDataForms} />
          </FormContainer>
        </BoxContent>
      </Box>
      <Box>
        <BoxHeader title="Seus formulários" >
          <Button>+ adicionar</Button>
        </BoxHeader>
        <BoxContent>
          <Content>
            <h3>Não há dados disponiveis</h3>
          </Content>
          <TopTableOptions />
          <InputBlock>
            <label htmlFor="search">Pesquisar</label>
            <Input type='search' />
          </InputBlock>
          <Table>
            <Thead>
              <Tr>
                <Th>Data </Th>
                <Th>
                  <Input type='text' list='formsearch' />
                  <datalist id='formsearch'>
                    <option value='Form name' />
                    <option value='option name' />
                  </datalist>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>21/08/2015 - 21:43</Td>
                <Td>form name</Td>
              </Tr>
            </Tbody>
          </Table>
          <PageSelector />
        </BoxContent>
      </Box>

    </Container>
  )
}

export default MediaForms;