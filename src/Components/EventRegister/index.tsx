import React from 'react'
import Button from '../Button'
import Input from '../Input'
import InputBlock from '../InputBlock'
import { Container, Content, Header, Main, Block, Navbar, Flex, FlexBetween, NavItem, NavButton, About, Box, Speakers, Programming, Table, TableFlex, TableDesc, Scribe, Form, Place, MapContainer, Payment, Footer } from './styles'
import { EventsRegisterContext } from '../../contexts/eventsRegisterContext';
import { EventsContext } from '../../contexts/eventsContext'
import { formatter } from '../../utils/formatMoneyBr'
import { useAxios } from '../../hooks/useAxios'
import { useParams } from 'react-router-dom'

const EventRegister = () => {
  const { data } = useAxios('events')
  const { id } = useParams()
  const { name: eventName,
    subName,
    startDate,
    endDate,
    value,
    formOfPayment,
    schedule,
    aboutTheEvent,
    place,
    image,
    speakers,
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
    setId } = React.useContext(EventsContext)

  const { name,
    setEvento,
    phone,
    email,
    address,
    number,
    district,
    zipCode,
    country,
    state,
    city,
    nameHandler,
    phoneHandler,
    emailHandler,
    addressHandler,
    numberHandler,
    districtHandler,
    zipCodeHandler,
    countryHandler,
    stateHandler,
    cityHandler,
    paymentHandler,
    handleSubmit } = React.useContext(EventsRegisterContext)

  React.useEffect(() => {
    if (parseInt(id!) >= 0) {
      setEvento(data?.events[`${id}`]._id)
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
  }, [data?.events, id, setAboutTheEvent, setEndDate, setEvento, setFormOfPayment, setId, setImage, setName, setNotification, setNumberOfVacancies, setPayment, setPlace, setSchedule, setSpeakers, setStartDate, setSubName, setValue])

  return (
    <Container>
      <Content>
        <Header>
          <h3>Lang</h3>
        </Header>
        <Main>
          <Block>
            <h3>{startDate?.split('T')[0]} a {endDate?.split('T')[0]}</h3>
            <h1>{eventName}</h1>
            <h5>{subName}</h5>
            <Button>Inscreva-se</Button>
            <h4>{formatter.format(value)}</h4>
          </Block>
        </Main>
        <Navbar>
          <Flex>
            <NavItem>Sobre o evento</NavItem>
            <NavItem>Palestrantes</NavItem>
            <NavItem>Programação</NavItem>
            <NavItem>Local</NavItem>
            <NavButton>Inscreva-se</NavButton>
          </Flex>
        </Navbar>
        <About>
          <Block>
            <h1>Sobre o evento</h1>
          </Block>
          <Box>
            <FlexBetween>
              <Block>
                <h3>Descrição</h3>
                <p>{aboutTheEvent}</p>
              </Block>
              <Block>
                <h3>Organizador</h3>
                <p>Name inc</p>
              </Block>
            </FlexBetween>
          </Box>
        </About>
        <Speakers>
          <br />
          <br />
          <Block>
            <h1>Palestrantes</h1>
          </Block>
          <Box>
            {speakers?.map((speaker: any) => {
              return (
                <Block>
                  <h3>{speaker.name}</h3>
                  <p>{speaker.description}</p>
                </Block>
              )
            })}
          </Box>
        </Speakers>
        <Programming>
          <Box>
            <Block>
              <h1>Programação</h1>
            </Block>
            <br />
            <Table>
              {schedule?.map((schedule: any, index: number) => {
                return (
                  <TableFlex>
                    <TableDesc key={index}>
                      <h1>{index + 1}º DIA</h1>
                      <p>{schedule.date?.split('T')[0]}</p>
                    </TableDesc>
                    <TableDesc>
                      <h2>{schedule.hours}</h2>
                      <p>{schedule.title}</p>
                    </TableDesc>
                  </TableFlex>
                )
              })}
            </Table>
          </Box>
        </Programming>
        <Scribe>
          <h1>Inscreva-se</h1>
          <Form onSubmit={handleSubmit}>
            <Block>
              <h3>Preencha os campos:</h3>
              <Flex>
                <InputBlock>
                  <label htmlFor="name">Nome</label>
                  <Input id='name' type="text" value={name} onChange={nameHandler} />
                </InputBlock>
                <InputBlock>
                  <label htmlFor="phone">Telefone</label>
                  <Input id='phone' type="number" value={phone} onChange={phoneHandler} />
                </InputBlock>
                <InputBlock>
                  <label htmlFor="email">E-mail</label>
                  <Input id='email' type="text" value={email} onChange={emailHandler} />
                </InputBlock>
              </Flex>
              <Flex>
                <InputBlock>
                  <label htmlFor="address">Endereço</label>
                  <Input id='address' type="text" value={address} onChange={addressHandler} />
                </InputBlock>
                <InputBlock>
                  <label htmlFor="number">Numero</label>
                  <Input id='number' type="number" value={number} onChange={numberHandler} />
                </InputBlock>
                <InputBlock>
                  <label htmlFor="district">Bairro</label>
                  <Input id='district' type="text" value={district} onChange={districtHandler} />
                </InputBlock>
              </Flex>
              <Flex>
                <InputBlock>
                  <label htmlFor="cep">CEP</label>
                  <Input id='cep' type="number" value={zipCode} onChange={zipCodeHandler} />
                </InputBlock>
                <InputBlock>
                  <label htmlFor="country">Pais</label>
                  <Input id='country' type="text" value={country} onChange={countryHandler} />
                </InputBlock>
                <InputBlock>
                  <label htmlFor="state">Estado</label>
                  <Input id='state' type="text" value={state} onChange={stateHandler} />
                </InputBlock>
                <InputBlock>
                  <label htmlFor="city">Cidade</label>
                  <Input id='city' type="text" value={city} onChange={cityHandler} />
                </InputBlock>
              </Flex>
              <h2>Forma de pagamento:</h2>
              <Payment>
                <h3>{formOfPayment}</h3>
                <p>{formatter.format(value)}</p>
                <Input title='payment' value='pix' type='radio' onChange={paymentHandler} />
              </Payment>
            </Block>
            <Block>
              <Flex>
                <Input id='politi' type='checkbox' />
                <label htmlFor="politi">Concordo em compartilhar meus dados com esta instituição,<br />
                  em conformidade com a LGPD e GDPR.<br /> Política de privacidade, Termos de uso</label>
              </Flex>
            </Block>
            <Button type='submit'>Enviar inscrição</Button>
          </Form>
        </Scribe>
        <Place>
          <Block>
            <br />
            <h1>Local do evento</h1>
            <p>address here</p>
          </Block>
          <MapContainer>

          </MapContainer>
          <br />
          <br />
        </Place>
        <Footer>

        </Footer>
      </Content>
    </Container>
  )
}

export default EventRegister