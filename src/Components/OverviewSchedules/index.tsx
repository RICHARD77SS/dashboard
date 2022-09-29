import { Link } from "react-router-dom";
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";


const OverviewSchedules = () => {
  return (
    <Container>
      <Content>
        <Box>
          <BoxHeader title='Mural'>
            <Button><Link to='/schedulewarnings' >Ver mais</Link></Button>
            
          </BoxHeader>
          <BoxContent>
            <h4>Não há dados disponiveis</h4>
            <Button><Link to='/schedulewarnings' >+Adicionar items</Link></Button>
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader title='Calendário'>
            <Button><Link to='/schedulecalendar'>Ver mais</Link></Button>
          </BoxHeader>
          <BoxContent>
            <h4>Não há dados disponiveis</h4>
            <Button><Link to='/schedulecalendar' >+Adicionar items</Link></Button>
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader title='Anotações'>
            <Button><Link to='/scheduleanotation'>Ver mais</Link></Button>
          </BoxHeader>
          <BoxContent>
            <h4>Não há dados disponiveis</h4>
            <Button><Link to='/scheduleanotation' >+Adicionar items</Link></Button>
          </BoxContent>
        </Box>
      </Content>
    </Container>
  )
}

export default OverviewSchedules;