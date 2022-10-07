import { Link } from "react-router-dom";
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Content from "../Content";

import { Buttonb, Anotation } from './styles';

const OverviewSchedules = () => {
  return (
    <Content>
      <Box>
        <BoxHeader title='Mural'>
          <Button><Link to='/schedulewarnings' >Ver mais</Link></Button>

        </BoxHeader>
        <BoxContent>
          <h4>Não há dados disponiveis</h4>
          <Buttonb><Link to='/schedulewarnings' >+Adicionar items</Link></Buttonb>
        </BoxContent>
      </Box>
      <Box>
        <BoxHeader title='Calendário'>
          <Button><Link to='/schedulecalendar'>Ver mais</Link></Button>
        </BoxHeader>
        <BoxContent>
          <h4>Não há dados disponiveis</h4>
          <Buttonb><Link to='/schedulecalendar' >+Adicionar items</Link></Buttonb>
        </BoxContent>
      </Box>
      <Box>
        <BoxHeader title='Anotações'>
          <Button><Link to='/scheduleanotation'>Ver mais</Link></Button>
        </BoxHeader>
        <BoxContent>
          <Anotation>
            <p>Anotation</p>
          </Anotation>
          <Buttonb><Link to='/scheduleanotation' >+Adicionar items</Link></Buttonb>
        </BoxContent>
      </Box>
    </Content>
  )
}

export default OverviewSchedules;