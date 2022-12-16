import { Link } from "react-router-dom"
import { useAxios } from "../../hooks/useAxios"
import { formatter } from "../../utils/formatMoneyBr"
import Box from "../Box"
import BoxContent from "../BoxContent"
import Button from "../Button"
import Container from "../Container"
import Content from "../Content"
import Flex from "../Flex"

import { ButtonCont, EventBox, EventBlock } from './styles';

const SchedduleEvents = () => {
  const { data } = useAxios('events')
  return (
    <Container>
      <h3>Eventos</h3>
      <ButtonCont>
        <Link to='/schedule/event/addevent/:id'>
          <Button>+ Adicionar</Button>
        </Link>
      </ButtonCont>
      <h3>Resultados</h3>
      <Content>
        <Box width="100%">
          <BoxContent width="100%">
            {data?.events.map((event: any, index: number) => {
              return (
                <EventBox key={index}>
                  <Flex>
                    <img src="" alt="event" />
                    <EventBlock>
                      <Link to={`/schedule/event/eventpage/${index}`}>
                        <h3>{event.name}</h3>
                        <h4>{event.subName}</h4>
                        <p>{event.startDate.split("T")[0]} - {event.endDate.split("T")[0]}</p>
                      </Link>
                    </EventBlock>
                  </Flex>
                  <EventBlock>
                    <p>Valor {formatter.format(event.value)}</p>
                    <Flex>
                      <Button>Pagina do evento</Button>
                      <Button>Copiar Link</Button>
                    </Flex>
                  </EventBlock>
                </EventBox>
              )
            })}
          </BoxContent>
        </Box>
      </Content>
    </Container>
  )
}

export default SchedduleEvents