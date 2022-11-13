
import BoxHeader from "../BoxHeader";

import { Container, Content, Block, Box, BoxContent } from './styles'
interface Props {
  name?: string;
  birth?: string;
  ageGroup?: string;
  sex?: string;
  schooling?: string;
  marital?: string;
  document1?: string;
  document2?: string;
  category?: string[];
  office?: string[];
  group?: string[];
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
  notes?: string;
}
const PersonDetailsInfos = (Props: Props) => {
  return (
    <Container >
      <Content>
        <Block>
          <Box>
            <BoxHeader title='Dados pessoais'></BoxHeader>
            <BoxContent>
              <p><b>Nome: &nbsp;</b>{Props.name}</p>
              <p><b>Data de nascimento: &nbsp;</b>{Props.birth}</p>
              <p><b>Faixa etária: &nbsp;</b>{Props.ageGroup}</p>
              <p><b>Sexo: &nbsp;</b>{Props.sex}</p>
              <p><b>Escolaridade: &nbsp;</b>{Props.schooling}</p>
              <p><b>Estado civil: &nbsp;</b>{Props.marital}</p>
              <p><b>Documento 1: &nbsp;</b>{Props.document1}</p>
              <p><b>Documento 2: &nbsp;</b>{Props.document2}</p>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Outras informações'></BoxHeader>
            <BoxContent>
              <p><b>Categorias: &nbsp;</b>{Props.category?.map((categories: string) => categories + ';  ')}</p>
              <p><b>Cargos: &nbsp;</b>{Props.office?.map((position: string) => position + ';  ')}</p>
              <p><b>Grupos: &nbsp;</b>{Props.group?.map((groups: string) => groups + ';  ')}</p>
              <p><b>Data de conversão: &nbsp;</b>{Props.conversion}</p>
              <p><b>Batizado: &nbsp;</b>{Props.batizm ? 'Sim' : 'Não'}</p>
              <p><b>Perfil criado em: &nbsp;</b>{Props.dataCreation?.split('T')[0]}</p>
            </BoxContent>
          </Box>
        </Block>
        <Block>
          <Box>
            <BoxHeader title='Contatos'></BoxHeader>
            <BoxContent>
              <p><b>Telefone 1: &nbsp;</b>{Props.phone1}</p>
              <p><b>Telefone 2: &nbsp;</b>{Props.phone2}</p>
              <p><b>E-mail: &nbsp;</b>{Props.email}</p>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Endereço'></BoxHeader>
            <BoxContent>
              <p><b>Endereço: &nbsp;  </b>{Props.addres}</p>
              <p><b>Bairro: &nbsp; </b>{Props.district}</p>
              <p><b>Número: &nbsp; </b>{Props.number}</p>
              <p><b>CEP: &nbsp; </b>{Props.zipcode}</p>
              <p><b>Cidade: &nbsp; </b>{Props.city}</p>
              <p><b>Estado: &nbsp; </b>{Props.state}</p>
              <p><b>País: &nbsp; </b>{Props.country}</p>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Anotações'></BoxHeader>
            <BoxContent>
              <p><b>Anotações</b></p>
              <textarea title='anotations' name="" id="" value={Props.notes} readOnly></textarea>
            </BoxContent>
          </Box>
        </Block>
      </Content>
    </Container>
  )
}

export default PersonDetailsInfos;