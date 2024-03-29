import React from "react";
import Box from "../Box";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import Flex from "../Flex";
import GraphLineArea from "../GraphLineArea";
import Input from "../Input";

import { Card, CardBg, CardImg, Liders, SubLiderImg, LiderImg, User, Image, ModalContainer, ModalContent, ModalClose, Persons, BoxContent } from './styles'
import { Link, useParams } from 'react-router-dom';
import { useAxios } from "../../hooks/useAxios";
import { GroupsContext } from "../../contexts/groupsContext";
import { PersonContext } from "../../contexts/personContext";
import { MeetingsContext } from "../../contexts/meetingsContext";
import AddMeetings from "../AddMeetings";
import { BiTrash } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const ViewGroup = () => {
  const { id } = useParams()
  const { data: dataGroup } = useAxios('groups');
  const { data: dataPerson } = useAxios('person');
  const { data: meetings } = useAxios('meetings')
  const { modalOpen, OpenModal, setGroup: addGroup, handleEdit: editMeetings } = React.useContext(MeetingsContext)
  const { handleDelete, handleEdit, anotationsHandle, anotations } = React.useContext(GroupsContext);
  const { handleEdit: editPeople, setGroup, indexHandler, index: ind, setIndex, modalAddPeople, setModalAddPeople, modalDeletePeople, setModalDeletePeople } = React.useContext(PersonContext);

  let participantsAndDate = meetings?.meetings.reduce((acc: any, item: any) => {
    if (item.group === dataGroup?.groups[`${id}`].name) {
      if (!acc[item.date.split('T')[0]]) {
        acc[item.date.split('T')[0]] = item.participants.length
      } else {
        acc[item.date.split('T')[0]].push(item.participants)
      }
    } return acc
  }, {})

  let visitorsAndDate = meetings?.meetings.reduce((acc: any, item: any) => {
    if (item.group === dataGroup?.groups[`${id}`].name) {
      if (!acc[item.date.split('T')[0]]) {
        acc[item.date.split('T')[0]] = item.visitors.length
      } else {
        acc[item.date.split('T')[0]].push(item.visitors)
      }
    } return acc
  }, {})

  let participantsValues: any = participantsAndDate ? Object.values(participantsAndDate)?.reduce((sum: any, item: any,) => { return sum + item }, 0) : 0
  let visitorsValues: any = visitorsAndDate ? Object.values(visitorsAndDate)?.reduce((sum: any, item: any) => { return sum + item }, 0) : 0

  const labels = participantsAndDate ? Object.keys(participantsAndDate) : 0;
  const LineData = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Participantes',
        data: participantsAndDate ? Object.values(participantsAndDate) : 0,
        borderColor: 'rgb(255, 162, 235)',
        backgroundColor: 'rgba(255, 162, 235, 0.5)',
      },
      {
        fill: true,
        label: 'Visitantes',
        data: visitorsAndDate ? Object.values(visitorsAndDate) : 0,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        fill: true,
        label: 'Total',
        data: participantsValues + visitorsValues,
        borderColor: 'rgb(53, 235, 159)',
        backgroundColor: 'rgba(93, 235, 53, 0.5)',
      },
    ],
  };
  React.useEffect(() => {
    setGroup(dataGroup?.groups[`${id}`].name)
    addGroup(dataGroup?.groups[`${id}`].name)
  }, [setGroup, addGroup, id, dataGroup?.groups])

  function DelGroup(index: number) {
    setModalDeletePeople(true)
    setIndex(index)
    if (dataPerson?.person[`${ind}`]?.group.includes(dataGroup?.groups[`${id}`].name)) {
      setGroup(dataPerson?.person[`${ind}`]?.group.filter((grp: any) => grp !== dataGroup?.groups[`${id}`].name))
    }
  }
  let lider1 = dataPerson?.person.map((person: any, index: number) => person.name === dataGroup?.groups[`${id}`].lider1?.name ? index : -1)?.filter((i: any) => i !== -1)

  let lider2 = dataPerson?.person.map((person: any, index: number) => person.name === dataGroup?.groups[`${id}`].lider2?.name ? index : -1)?.filter((i: any) => i !== -1)

  let lider3 = dataPerson?.person.map((person: any, index: number) => person.name === dataGroup?.groups[`${id}`].lider3?.name ? index : -1)?.filter((i: any) => i !== -1)

  let lider4 = dataPerson?.person.map((person: any, index: number) => person.name === dataGroup?.groups[`${id}`].lider4?.name ? index : -1)?.filter((i: any) => i !== -1)

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
          <h4>{dataGroup?.groups[`${id}`].name}</h4>
          <p>{dataPerson?.person.map((person: any, index: number) => {
            return person.group.includes(dataGroup?.groups[`${id}`].name) ?
              person.name
              : -1
          }).filter((persons: any) => persons !== -1).length} Pessoas</p>
          <p>Liderança</p>
          <Liders>
            <SubLiderImg>
              <Link to={`/persons/details/${lider2}`}>
                <img src={dataGroup?.groups[`${id}`].lider2?.image} alt="" />
                <p>{dataGroup?.groups[`${id}`].lider2?.name}</p>
              </Link>
            </SubLiderImg>
            <LiderImg>
              <Link to={`/persons/details/${lider1}`}>
                <img src={dataGroup?.groups[`${id}`].lider1?.image} alt="" />
                <p>{dataGroup?.groups[`${id}`].lider1?.name}</p>
              </Link>
            </LiderImg>
            <SubLiderImg>
              <Link to={`/persons/details/${lider3}`}>
                <img src={dataGroup?.groups[`${id}`].lider3?.image} alt="" />
                <p>{dataGroup?.groups[`${id}`].lider3?.name}</p>
              </Link>
            </SubLiderImg>
          </Liders>
        </Card>
        <Box>
          <BoxHeader title='Pessoas'>
            <Button onClick={() => setModalAddPeople(true)}>+ Adicionar</Button>
            {modalAddPeople ?
              <ModalContainer>
                <ModalContent >
                  <Button type='button' onClick={() => setModalAddPeople(false)}><MdClose size='25' /></Button>
                  <h3>Selecione um usuario</h3>
                  <Persons>
                    <select title='selectPerson' onChange={indexHandler}>
                      <option value=''></option>
                      {dataPerson?.person.map((person: any, index: number) => {
                        return !person.group.includes(dataGroup?.groups[`${id}`].name) ?
                          <option key={index} value={index}>{person.name}</option>
                          : null
                      })}
                    </select>
                  </Persons>
                  {ind === -1 ?
                    <Button type='button' disabled>Adicionar</Button>
                    :
                    <Button type='button' onClick={() => editPeople(dataPerson?.person[`${ind}`]?._id)}>Adicionar</Button>
                  }
                </ModalContent>
                <ModalClose>
                </ModalClose>
              </ModalContainer>
              : null}
          </BoxHeader>
          <BoxContent>
            <Input type='search' />
            {dataPerson?.person.map((person: any, index: number) => {
              return person.group.indexOf(dataGroup?.groups[`${id}`].name) > -1 ?
                <User key={index}>
                  <Link to={`/persons/details/${index}`}>
                    <Image>
                      <img src={person.image} alt="" />
                    </Image>
                  </Link>
                  <p><Link to={`/persons/details/${index}`}><pre>{person.name}</pre></Link></p>
                  <Button type='button' onClick={() => DelGroup(index)}><BiTrash /></Button>
                </User>
                : null
            })}
            {modalDeletePeople ?
              <ModalContainer>
                <ModalContent>
                  <Button type='button' onClick={() => setModalDeletePeople(false)}><MdClose size='25' /></Button>
                  <h3>Remover usuario do grupo ?</h3>
                  <Button type='button' onClick={() => editPeople(dataPerson?.person[`${ind}`]?._id)}>Remover</Button>
                </ModalContent>
                <ModalClose>
                </ModalClose>
              </ModalContainer> : null}
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader title='Informações'>
            <Button onClick={() => handleEdit(
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
            }>
              <Link to='/addgroups'>
                Editar
              </Link>
            </Button>
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
              <p> {dataGroup?.groups[`${id}`].category?.map((category: string) => category + '; ')}</p>
            </Flex>
            <Flex>
              <p><b>Grupo de origem:</b></p>
              <p>{dataGroup?.groups[`${id}`].originGroup}</p>
            </Flex>
            <Flex>
              <p><b>Lider 1:</b></p>
              <p>{dataGroup?.groups[`${id}`].lider1.name}</p>
            </Flex>
            <Flex>
              <p><b>Lider 2:</b></p>
              <p>{dataGroup?.groups[`${id}`].lider2.name}</p>
            </Flex>
            <Flex>
              <p><b>Lider 3:</b></p>
              <p>{dataGroup?.groups[`${id}`].lider3.name}</p>
            </Flex>
            <Flex>
              <p><b>Lider 4:</b></p>
              <p>{dataGroup?.groups[`${id}`].lider4.name}</p>
            </Flex>
            <Flex>
              <p><b>Endereço:</b></p>
              <p>
                {dataGroup?.groups[`${id}`].address},&nbsp;
                {dataGroup?.groups[`${id}`].district},&nbsp;
                {dataGroup?.groups[`${id}`].country},&nbsp;
                {dataGroup?.groups[`${id}`].state},&nbsp;
                {dataGroup?.groups[`${id}`].city},&nbsp;
                {dataGroup?.groups[`${id}`].number}
              </p>
            </Flex>
          </BoxContent>
        </Box>
      </Content>
      <Content>
        <Box>
          <BoxHeader title='Reuniões recentes'>
            <Button onClick={() => OpenModal()}>+ Nova reunião</Button>
          </BoxHeader>
          <BoxContent>
            <Flex><h4>Data</h4><h4>Participantes</h4><h4>Visitantes</h4></Flex>
            {meetings?.meetings.map((meetings: any,
              index: number) => {
              return meetings.group === dataGroup?.groups[`${id}`].name ?
                <User key={index}>
                  <Button className='meeting' onClick={() => editMeetings(meetings._id,
                    meetings.name,
                    meetings.group,
                    meetings.date.split('T')[0],
                    meetings.subject,
                    meetings.value,
                    meetings.participants,
                    meetings.visitors,
                    meetings.notes,
                    index
                  )}>
                    <p>{meetings.date?.split('T')[0]}</p>&nbsp;
                    <p>{meetings.participants?.length}</p>&nbsp;
                    <p>{meetings.visitors?.length}</p>
                  </Button>
                </User>
                : null
            })}
          </BoxContent>
        </Box>
        <Box width='400px'>
          <BoxHeader title='Presentes nas últimas reuniões'>

          </BoxHeader>
          <BoxContent>
            <GraphLineArea data={LineData} />
          </BoxContent>
        </Box>

      </Content>
      <Content>
        <Box width='300px'>
          <BoxHeader title='Anotações'>

          </BoxHeader>
          <BoxContent >
            <h3>Anotações</h3>
            <p>{dataGroup?.groups[`${id}`].anotations}</p>
            <textarea title='text' name="" value={anotations} id="" onChange={anotationsHandle} ></textarea>
            <Button>Salvar</Button>
          </BoxContent>
        </Box>
        <Box width='350px'>
          <BoxHeader title='Grupos filhos'>

          </BoxHeader>
          <BoxContent>
            {dataGroup?.groups.map((group: any, index: number) => {
              return group.originGroup === dataGroup?.groups[`${id}`].name ?
                <Link to={`/groups/viewgroup/${index}`}>
                  <User key={index}>
                    <Image>
                      <img src={group.image} alt="" />
                    </Image>
                    <p>{group.name}</p>
                  </User>
                </Link>
                : null
            })}
          </BoxContent>
        </Box>
      </Content>
    </Container>
  )
}

export default ViewGroup;
