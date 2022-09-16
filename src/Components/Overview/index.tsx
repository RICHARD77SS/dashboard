import Button from "../Button"
import { Container } from "./styles"

const Overview = () => {
  return (
    <Container>
      <Content>
        <Box>
          <BoxHeader>
            <h3>Mural</h3>
            <Button>Ver mais</Button>
          </BoxHeader>
          <BuxContent>
            <h4>Não há dados disponiveis</h4>
            <Button>+Adicionar items</Button>
          </BuxContent>
        </Box>
        <Box>
          <BoxHeader>
            <h3>Calendário</h3>
            <Button>Ver mais</Button>
          </BoxHeader>
          <BuxContent>
            <h4>Não há dados disponiveis</h4>
            <Button>+Adicionar item</Button>
          </BuxContent>
        </Box>
        <Box>
          <BoxHeader>
            <h3>Anotações</h3>
            <Button>Ver mais</Button>
          </BoxHeader>
          <BuxContent>
            <h4>Não há dados disponiveis</h4>
            <Button>+Adicionar anotação</Button>
          </BuxContent>
        </Box>
      </Content>
      <Content>
        <
      </Content>
    </Container>
  )
}
export default Overview
