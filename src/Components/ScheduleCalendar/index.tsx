import Aside from "../Aside";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container"
import Content from "../Content"
import Input from "../Input";
import InputBlock from "../InputBlock";
import { Box } from '../StudiesImportsExports/styles';
import { AsideContent } from './styles';
import React from 'react'
import { ScheduleCalendarContext } from "../../contexts/scheduleCalendarContext";
const ScheduleCalendar = () => {
  const { OpenModal } = React.useContext(ScheduleCalendarContext)
  return (
    <Container>
      <h3>Calendario</h3>
      <Content>
        <Box>
          <Button type='button' onClick={() => OpenModal()}>Add</Button>
          <BoxContent>

          </BoxContent>
        </Box>
        <Aside>
          <BoxHeader title='Categorias' />
          <BoxContent>
            <AsideContent>
              <InputBlock>
                <label htmlFor="name">Nome da Categoria</label>
                <Input type='text' />
              </InputBlock>
              <InputBlock>
                <label htmlFor="description">Descrição</label>
                <textarea title='area' name="" id="" ></textarea>
              </InputBlock>
              <Button>Criar</Button>
              <BoxContent>
              </BoxContent>
            </AsideContent>
          </BoxContent>
        </Aside>
      </Content>
    </Container>
  )
}

export default ScheduleCalendar