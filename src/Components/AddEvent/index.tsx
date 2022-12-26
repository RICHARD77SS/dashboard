import React from 'react'
import Button from '../Button';
import Input from '../Input';

import { Container, Form, Content, Fieldset, Data, Header, DataContent, Flex, Block, Foto, InputBlock, Palestrante } from './styles';
import { useAxios } from '../../hooks/useAxios';
import TextArea from '../TextArea';
import TextEditor from '../TextEditor';
import { EventsContext } from '../../contexts/eventsContext';
import { useParams } from 'react-router-dom';
const AddEvent = () => {
  const { data } = useAxios('events')
  const { id } = useParams()
  const { name,
    subName,
    startDate,
    endDate,
    notification,
    payment,
    value,
    numberOfVacancies,
    formOfPayment,
    schedule,
    aboutTheEvent,
    place,
    image,
    speakers,
    nameHandler,
    subNameHandler,
    startDateHandler,
    endDateHandler,
    notificationHandler,
    paymentHandler,
    valueHandler,
    numberOfVacanciesHandler,
    formOfPaymentHandler,
    scheduleHandler,
    placeHandler,
    imageHandler,
    speakersHandler,
    handleSubmit,
    RemoveSchedule,
    RemoveSpeakers,
    AddSchedule,
    AddSpeakers,
    setName,
    setSubName,
    setStartDate,
    setEndDate,
    setNotification,
    setPayment,
    setValue,
    setNumberOfVacancies,
    setFormOfPayment,
    setSchedule,
    setAboutTheEvent,
    setPlace,
    setImage,
    setSpeakers,
    setId
  } = React.useContext(EventsContext)

  React.useEffect(() => {
    if (parseInt(id!) >= 0) {
      setId(data?.events[`${id}`]._id)
      setName(data?.events[`${id}`].name)
      setSubName(data?.events[`${id}`].subName)
      setStartDate(data?.events[`${id}`].startDate)
      setEndDate(data?.events[`${id}`].endDate)
      setNotification(data?.events[`${id}`].notification)
      setPayment(data?.events[`${id}`].payment)
      setValue(data?.events[`${id}`].value)
      setNumberOfVacancies(data?.events[`${id}`].numberOfVacancies)
      setFormOfPayment(data?.events[`${id}`].formOfPayment)
      setSchedule(data?.events[`${id}`].schedule)
      setAboutTheEvent(data?.events[`${id}`].aboutTheEvent)
      setPlace(data?.events[`${id}`].place)
      setImage(data?.events[`${id}`].image)
      setSpeakers(data?.events[`${id}`].speakers)
    }
  }, [data?.events, id, setAboutTheEvent, setEndDate, setFormOfPayment, setId, setImage, setName, setNotification, setNumberOfVacancies, setPayment, setPlace, setSchedule, setSpeakers, setStartDate, setSubName, setValue])
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <br />
        <br />
        <Content>
          <Fieldset>
            <Data>
              <Header>
                <h3>Informações do evento</h3>
              </Header>
              <DataContent>
                <Flex>
                  <Block>
                    <label htmlFor="logo">Logo</label>
                    <Foto>
                      <img src={image} alt="" />
                      <input title='image' type='text' value={image} onChange={imageHandler} />
                    </Foto>
                  </Block>
                  <InputBlock>
                    <Block>
                      <label htmlFor="titlep">Título</label>
                      <input
                        id='titlep'
                        name='titlep'
                        type='text'
                        value={name}
                        onChange={nameHandler}
                        required
                      />
                    </Block>
                    <Block>
                      <label htmlFor="subtitulo">Subtítulo</label>
                      <input
                        id='subtitulo'
                        name='subtitulo'
                        type='text'
                        value={subName}
                        onChange={subNameHandler}
                      />
                    </Block>
                  </InputBlock>
                </Flex>
                <Flex>
                  <Block>
                    <label htmlFor="startDate">Data inicial</label>
                    <input
                      name='startDate'
                      id='startDate'
                      value={startDate}
                      onChange={startDateHandler}
                      type='date'
                    />
                  </Block>
                  <Block>
                    <label htmlFor="endDate">Data final</label>
                    <input
                      name='endDate'
                      id='endDate'
                      value={endDate}
                      onChange={endDateHandler}
                      type='date'
                    />
                  </Block>
                </Flex>
                <Block>
                  <label htmlFor="notification">Notificação</label>
                  <input type='checkbox' title='notification' id='notification' checked={notification === true ? true : false}
                    onChange={notificationHandler} />
                </Block>
              </DataContent>
            </Data>
            <Data>
              <Header>
                <h3>Pagamento</h3>
              </Header>
              <DataContent>
                <Block>
                  <label htmlFor="group">Grupo</label>
                  <Flex>
                    <Input type='radio' id='gratuito' value='gratuito' name='pay' onChange={paymentHandler} />
                    <label htmlFor='gratuito'>Gratuito</label>
                  </Flex>
                  <Flex>
                    <Input type='radio' id='pago' value='pago' name='pay' onChange={paymentHandler} />
                    <label htmlFor='pago'>Pago</label>
                  </Flex>
                </Block>
                {payment === 'pago' ?
                  <Block>
                    <label htmlFor="value">valor</label>
                    <Input id='value' type='number' value={value} onChange={valueHandler} />
                  </Block>
                  : null}
                <Block>
                  <label htmlFor="vacancies">Quantidade de vagas</label>
                  <Input id='vacancies' type='number' value={numberOfVacancies} onChange={numberOfVacanciesHandler} />
                </Block>
              </DataContent>
            </Data>
            {payment === 'pago' ?
              <Data>
                <Header>
                  <h3>Formas de pagramento</h3>
                </Header>
                <DataContent>
                  <Block>
                    <label htmlFor="event">No evento</label>
                    <input
                      name='payment'
                      id='event'
                      value='evento'
                      onChange={formOfPaymentHandler}
                      checked={formOfPayment === 'evento' ? true : false}
                      type='radio'
                    />
                  </Block>
                  <Block>
                    <label htmlFor="pix">Pix</label>
                    <input
                      name='payment'
                      id='pix'
                      value='pix'
                      onChange={formOfPaymentHandler}
                      checked={formOfPayment === 'pix' ? true : false}
                      type='radio'
                    />
                  </Block>
                  <Block>
                    <label htmlFor="Deposito">Depósito bancário</label>
                    <input
                      id='Deposito'
                      name='payment'
                      value='deposito'
                      onChange={formOfPaymentHandler}
                      checked={formOfPayment === 'deposito' ? true : false}
                      type='radio'
                    />
                  </Block>
                </DataContent>
              </Data>
              : null}
          </Fieldset>
          <Fieldset>
            <Data>
              <Header>
                <h3>Programação</h3>
              </Header>
              <DataContent>
                <Block>
                  {schedule?.map((schedule: any, index: number) => {
                    return (
                      <Block>
                        <label htmlFor="title">Titulo</label>
                        <input
                          name='title'
                          id='title'
                          type='text'
                          value={schedule.title}
                          onChange={(event) => scheduleHandler(event, index)}
                        />
                        <label htmlFor="dates">Data</label>
                        <input
                          name='date'
                          id='dates'
                          type='date'
                          value={schedule.date}
                          onChange={(event) => scheduleHandler(event, index)}
                        />
                        <label htmlFor="hours">Horario</label>
                        <input
                          name='hours'
                          id='hours'
                          type='number'
                          value={schedule.hours}
                          onChange={(event) => scheduleHandler(event, index)}
                        />
                        <Button type='button' onClick={() => RemoveSchedule(index)}>Apagar</Button>
                      </Block>
                    )
                  })}
                  <Button type='button' onClick={() => { AddSchedule() }}>+ Adicionar nova opção</Button>
                </Block>
              </DataContent>
            </Data>
            <Data>
              <Header>
                <h3>Detalhes</h3>
              </Header>
              <DataContent>
                <TextArea height='300px'>
                  <TextEditor value={aboutTheEvent} setValue={setAboutTheEvent}></TextEditor>
                </TextArea>
                <Block>
                  <label htmlFor="local">Local</label>
                  <input
                    name='local'
                    id='local'
                    value={place}
                    onChange={placeHandler}
                    type='text'
                  />
                </Block>
                <Block>
                  <label htmlFor="logo">Logo</label>
                  <Foto>
                    <img src={image} alt="" />
                    <input title='image' type='text' value={image} onChange={imageHandler} />
                  </Foto>
                </Block>
              </DataContent>
            </Data>
          </Fieldset>
        </Content>
        <Data>
          <Header>
            <h3>Palestrantes</h3>
          </Header>
          <DataContent>
            {speakers?.map((speaker: any, index: number) => {
              return (
                <Palestrante>
                  <Flex>
                    <Foto>
                      <img src={speaker.image} alt="" />
                      <Input type='file' />
                    </Foto>
                    <Block>
                      <input
                        name='name'
                        id='name'
                        type='text'
                        placeholder='nome'
                        value={speaker.name}
                        onChange={(event) => speakersHandler(event, index)}
                      />
                      <input
                        name='description'
                        id='description'
                        type='text'
                        placeholder='Descrição'
                        value={speaker.description}
                        onChange={(event) => speakersHandler(event, index)}
                      />
                    </Block>
                    <Button type='button' onClick={() => RemoveSpeakers(index)}>Apagar</Button>
                  </Flex>
                </Palestrante>

              )
            })}
            <Button type='button' onClick={() => { AddSpeakers() }}>+ Adicionar nova opção</Button>
          </DataContent>
        </Data>
        <Button type='submit' >Salvar</Button>
      </Form>
    </Container >
  )
}

export default AddEvent