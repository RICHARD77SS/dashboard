import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";

import { Container, Content, Block, Box } from './styles'
interface Props {
  name?: string;
  birth?: string;
  ageGroup?: string;
  sex?: string;
  schooling?: string;
  marital?: string;
  document1?: string;
  document2?: string;
  category?: string;
  office?: string;
  conversion?: string;
  batizm?: string;
  dataCreation?: string;
  phone1?: string;
  phone2?: string;
  email?: string;
  addres?: string;
  district?: string;
  number?: string;
  zipcode?: string;
  city?: string;
  state?: string;
  country?: string;
}
const PersonDetailsInfos = (Props: Props) => {
  return (
    <Container >
      <Content>
        <Block>
          <Box>
            <BoxHeader title='Dados pessoais'></BoxHeader>
            <BoxContent>
              <p><b>Nome:</b>{Props.name}</p>
              <p><b>Data de nascimento:</b>{Props.birth}</p>
              <p><b>Faixa etária:</b></p>
              <p><b>Sexo:</b></p>
              <p><b>Escolaridade:</b></p>
              <p><b>Estado civil:</b></p>
              <p><b>Documento 1:</b></p>
              <p><b>Documento 2:</b></p>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Outras informações'></BoxHeader>
            <BoxContent>
              <p><b>Categorias:</b></p>
              <p><b>Cargos:</b></p>
              <p><b>Data de conversão:</b></p>
              <p><b>Batizado:</b></p>
              <p><b>Perfil criado em:</b></p>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Contatos'></BoxHeader>
            <BoxContent>
              <p><b>Telefone 1:</b></p>
              <p><b>Telefone 2:</b></p>
              <p><b>E-mail:</b></p>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Endereço'></BoxHeader>
            <BoxContent>
              <p><b>Endereço:</b></p>
              <p><b>Bairro:</b></p>
              <p><b>Número:</b></p>
              <p><b>CEP:</b></p>
              <p><b>Cidade:</b></p>
              <p><b>Estado:</b></p>
              <p><b>País:</b></p>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Anotações'></BoxHeader>
            <BoxContent>
              <p><b>Anotações</b></p>
            </BoxContent>
          </Box>
        </Block>
      </Content>
    </Container>
  )
}

export default PersonDetailsInfos;