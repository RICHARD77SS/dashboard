import Box from "../Box"
import BoxContent from "../BoxContent"
import Button from "../Button"
import Container from "../Container"
import Content from "../Content"

import { ButtonCont } from './styles';

const SchedduleEvents =() => {
  return (
    <Container>
      <h3>Eventos</h3>
      <ButtonCont>
        <Button>+ Adicionar</Button>
      </ButtonCont>
      <h3>Resultados</h3>
      <Content>
        <Box>
          <BoxContent>
            <h3>Nenhum evento cadastrado</h3>
          </BoxContent>
        </Box>
      </Content>
    </Container>
  )
}

export default SchedduleEvents