import React from 'react'
import { BiCopyAlt, BiLeftArrow } from 'react-icons/bi';
import { BsPencilSquare } from 'react-icons/bs';
import { MdFormatAlignCenter } from 'react-icons/md';
import { Link } from 'react-router-dom';
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
import { useAxios } from '../../hooks/useAxios';


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
  const { data } = useAxios('forms')

  return (
    <Container>
      <h3>Formulários</h3>
      <Box>
        <BoxHeader title="Seus formulários" >
          <Link to='/forms/add/o'><Button>+ adicionar</Button></Link>
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
                  Nome
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.forms.map((forms: any, index: number) => {
                return (
                  <Tr key={index}>
                    <Td><Link to={`/forms/add/${index}`}>{forms.date}</Link></Td>
                    <Td><Link to={`/forms/add/${index}`}>{forms.title}</Link></Td>
                  </Tr>

                )
              })}
            </Tbody>
          </Table>
          <PageSelector />
        </BoxContent>
      </Box>

    </Container>
  )
}

export default MediaForms;