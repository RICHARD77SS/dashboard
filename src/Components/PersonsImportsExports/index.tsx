import Button from '../Button';
import { Container, Content, Box, BoxHeader, BoxContent } from './styles';

const PersonsImportsExports = () => {
  return (
    <Container>
      <Content>
        <Box>
          <BoxHeader>
            <h3>Pessoas</h3>
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
            <h3>Pessoas - Categorias</h3>
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
            <h3>Pessoas - Campos adicionais</h3>
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
            <h3>Pessoas - Cargos</h3>
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

export default PersonsImportsExports;