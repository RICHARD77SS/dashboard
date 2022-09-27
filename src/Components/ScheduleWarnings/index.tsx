import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Container from "../Container";
import { Buttons } from './styles';
const ScheduleWarnings = () => {
  return (
    <Container>
      <Box>
        <BoxHeader title='Resultados: 0' />
        <BoxContent>
          <Buttons>+ Adicionar imagem</Buttons>
          <Buttons>+ Adicionar texto</Buttons>
        </BoxContent>
      </Box>
    </Container>
  )
}

export default ScheduleWarnings;