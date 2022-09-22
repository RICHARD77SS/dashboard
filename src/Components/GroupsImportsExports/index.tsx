import Button from '../Button';
import { Container, Content, Box, BoxHeader, BoxContent } from './styles';

const GroupsImportsExports = () => {
  return (
    <Container>
      <Content>
        <Box>
          <BoxHeader>
            <h3>Grupos</h3>
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
            <h3>Grupos - Categorias</h3>
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

export default GroupsImportsExports;