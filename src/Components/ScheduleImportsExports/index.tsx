import Button from '../Button';
import { Container, Content, Box, BoxHeader, BoxContent } from './styles';

const ScheduleImportsExports = () => {
  return (
    <Container>
      <Content>
        <Box>
          <BoxHeader>
            <h3>Agenda - Calendario</h3>
          </BoxHeader>
          <BoxContent>
            <Button>
              Exportar
            </Button>
            <Button>
              Importar
            </Button>
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader>
            <h3>Agenda - Mural de avisos</h3>
          </BoxHeader>
          <BoxContent>
            <Button>
              Exportar
            </Button>
            <Button>
              Importar
            </Button>
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader>
            <h3>Agenda - Minhas anotações</h3>
          </BoxHeader>
          <BoxContent>
            <Button>
              Exportar
            </Button>
            <Button>
              Importar
            </Button>
          </BoxContent>
        </Box>
      </Content>
    </Container>
  )
}

export default ScheduleImportsExports;