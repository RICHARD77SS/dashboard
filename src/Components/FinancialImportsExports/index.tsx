import Button from '../Button';
import { Container, Content, Box, BoxHeader, BoxContent } from './styles';

const FinancialImportsExports = () => {
  return (
    <Container>
      <Content>
        <Box>
          <BoxHeader>
            <h3>Financeiro - Transações</h3>
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
            <h3>Financeiro - Categorias</h3>
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
            <h3>Financeiro - Contas</h3>
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
            <h3>Financeiro - Contatos</h3>
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
            <h3>Financeiro - Centros de custos</h3>
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

export default FinancialImportsExports;