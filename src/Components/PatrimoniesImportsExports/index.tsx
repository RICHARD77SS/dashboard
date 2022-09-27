import Button from '../Button';
import { Container, Content, Box, BoxHeader, BoxContent } from './styles';

const PatrimoniesImportsExports = () => {
  return (
    <Container>
      <Content>
        <Box>
          <BoxHeader>
            <h3>Patrimônio</h3>
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
            <h3>Patrimônio - Categorias</h3>
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
            <h3>Patrimônio - Locais</h3>
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

export default PatrimoniesImportsExports;