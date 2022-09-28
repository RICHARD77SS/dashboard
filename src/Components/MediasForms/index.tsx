
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";


const MediaForms = () => {
  return (
    <Container>
      <h3>Formulários</h3>
      <Content>
        <Box>
          <BoxHeader title="Seus formulários" >
            <Button>+ adicionar</Button>
          </BoxHeader>
          <BoxContent>
            <Content>
              <h3>Não há dados disponiveis</h3>
            </Content>
          </BoxContent>
        </Box>

      </Content>
    </Container>
  )
}

export default MediaForms;