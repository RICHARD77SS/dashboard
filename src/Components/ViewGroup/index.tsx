import React from "react";
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import Flex from "../Flex";
import GraphLineArea from "../GraphLineArea";
import Input from "../Input";

import { Card, CardBg, CardImg, Liders, SubLiderImg, LiderImg } from './styles'
import { Link, useParams } from 'react-router-dom';
import { useAxios } from "../../hooks/useAxios";
import { GroupsContext } from "../../contexts/groupsContext";
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const LineData = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Ano atual',
      data: [122, 212, 313, 414, 166, 778, 2919],
      borderColor: 'rgb(255, 162, 235)',
      backgroundColor: 'rgba(255, 162, 235, 0.5)',
    },
    {
      fill: true,
      label: 'Ano anterior',
      data: [1222, 212, 313, 414, 166, 778, 919],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const ViewGroup = () => {
  const { id } = useParams()
  const { data: dataGroup } = useAxios('groups')
  const { handleDelete, handleEdit } = React.useContext(GroupsContext)
  return (
    <Container>
      <Content>
        <Card>
          <CardBg>
            <img src={dataGroup?.groups[`${id}`].bg} alt="" />
          </CardBg>
          <CardImg>
            <img src={dataGroup?.groups[`${id}`].image} alt="" />
          </CardImg>
          <h4>Group name</h4>
          <p>0 pessoas</p>
          <p>Liderança</p>
          <Liders>
            <SubLiderImg>
              <img src="https://img.freepik.com/fotos-gratis/mulher-de-negocios-executivo-em-um-escritorio_1303-16020.jpg?w=740&t=st=1663694328~exp=1663694928~hmac=510f0aaa58d630452c9bd0e7ac087d41af956778c00d5398202f1bb8b83ea1bb" alt="" />
            </SubLiderImg>
            <LiderImg>
              <img src="https://img.freepik.com/fotos-gratis/mulher-de-negocios-executivo-em-um-escritorio_1303-16020.jpg?w=740&t=st=1663694328~exp=1663694928~hmac=510f0aaa58d630452c9bd0e7ac087d41af956778c00d5398202f1bb8b83ea1bb" alt="" />
            </LiderImg>
            <SubLiderImg>
              <img src="https://img.freepik.com/fotos-gratis/mulher-de-negocios-executivo-em-um-escritorio_1303-16020.jpg?w=740&t=st=1663694328~exp=1663694928~hmac=510f0aaa58d630452c9bd0e7ac087d41af956778c00d5398202f1bb8b83ea1bb" alt="" />
            </SubLiderImg>
          </Liders>
        </Card>
        <Box>
          <BoxHeader title='Pessoas'>
            <Button>+ Adicionar</Button>
          </BoxHeader>
          <BoxContent>
            <Input type='search' />
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader title='Pessoas'>
            <Link to='/addgroups'><Button onClick={() => handleEdit(
              dataGroup?.groups[`${id}`]._id,
              dataGroup?.groups[`${id}`].name,
              dataGroup?.groups[`${id}`].image,
              dataGroup?.groups[`${id}`].bg,
              dataGroup?.groups[`${id}`].creationDate,
              dataGroup?.groups[`${id}`].weekDay,
              dataGroup?.groups[`${id}`].sex,
              dataGroup?.groups[`${id}`].time,
              dataGroup?.groups[`${id}`].category,
              dataGroup?.groups[`${id}`].originGroup,
              dataGroup?.groups[`${id}`].lider1,
              dataGroup?.groups[`${id}`].lider2,
              dataGroup?.groups[`${id}`].lider3,
              dataGroup?.groups[`${id}`].lider4,
              dataGroup?.groups[`${id}`].address,
              dataGroup?.groups[`${id}`].district,
              dataGroup?.groups[`${id}`].number,
              dataGroup?.groups[`${id}`].country,
              dataGroup?.groups[`${id}`].state,
              dataGroup?.groups[`${id}`].city,
              dataGroup?.groups[`${id}`].anotations,
              dataGroup?.groups[`${id}`].participants,
            )
            }>Editar</Button></Link>
            <Link to='/groups'>
              <Button type='button' onClick={() => handleDelete(dataGroup?.groups[`${id}`]._id)}>Remover</Button>
            </Link>
          </BoxHeader>
          <BoxContent>
            <Flex>
              <p><b>Data de abertura:</b></p>
              <p>{dataGroup?.groups[`${id}`].creationDate}</p>
            </Flex>
            <Flex>
              <p><b>Dia da semana</b></p>
              <p>{dataGroup?.groups[`${id}`].weekDay}</p>
            </Flex>
            <Flex>
              <p><b>Perfil:</b></p>
              <p>{dataGroup?.groups[`${id}`].sex}</p>
            </Flex>
            <Flex>
              <p><b>Categorias:</b></p>
              <p> {dataGroup?.groups[`${id}`].category}</p>
            </Flex>
            <Flex>
              <p><b>Grupo de origem:</b></p>
              <p>{dataGroup?.groups[`${id}`].name}</p>
            </Flex>
            <Flex>
              <p><b>Lider 1:</b></p>
              <p>{dataGroup?.groups[`${id}`].lider1}</p>
            </Flex>
            <Flex>
              <p><b>Lider 2:</b></p>
              <p>{dataGroup?.groups[`${id}`].lider2}</p>
            </Flex>
            <Flex>
              <p><b>Lider 3:</b></p>
              <p>{dataGroup?.groups[`${id}`].lider3}</p>
            </Flex>
            <Flex>
              <p><b>Lider 4:</b></p>
              <p>{dataGroup?.groups[`${id}`].lider4}</p>
            </Flex>
            <Flex>
              <p><b>Endereço:</b></p>
              <p>
                {dataGroup?.groups[`${id}`].address},
                {dataGroup?.groups[`${id}`].district},
                {dataGroup?.groups[`${id}`].country},
                {dataGroup?.groups[`${id}`].state},
                {dataGroup?.groups[`${id}`].city},
                {dataGroup?.groups[`${id}`].number}
              </p>
            </Flex>
          </BoxContent>
        </Box>
      </Content>
      <Content>
        <Box>
          <BoxHeader title='Reuniões recentes'>
            <Button>+ Nova reunião</Button>
          </BoxHeader>
          <BoxContent>
            <h3>Não há dados</h3>
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader title='Presentes nas últimas reuniões'>
            <Button>+ Nova reunião</Button>
          </BoxHeader>
          <BoxContent>
            <GraphLineArea data={LineData} />
          </BoxContent>
        </Box>
      </Content>
      <Content>
        <Box>
          <BoxHeader title='Anotações'>
            <Button>+ Nova reunião</Button>
          </BoxHeader>
          <BoxContent>
            <textarea title='text' name="" id="" >area</textarea>
            <Button>Salvar</Button>
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader title='Grupos filhos'>
            <Button>+ Nova reunião</Button>
          </BoxHeader>
          <BoxContent>
            <h3>Não há dados</h3>
          </BoxContent>
        </Box>
      </Content>
    </Container>
  )
}

export default ViewGroup;
