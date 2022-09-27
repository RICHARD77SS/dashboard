
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import Flex from "../Flex";
import Input from "../Input";
import InputBlock from "../InputBlock";
import TabContact from "../TabContact";
import { Aside } from "./styles";

const FinancialContacts = () => {
  return (
    <Container>
      <Content>
        <TabContact />
        <Aside>
          <BoxHeader title="+ Criar Contato" />
          <BoxContent>
            <Flex>
              <InputBlock>
                <label htmlFor="name">Nome</label>
                <Input id='name' type='text' />
              </InputBlock>
              <InputBlock>
                <label htmlFor="email">E-mail</label>
                <Input id='email' type='email' />
              </InputBlock>
            </Flex>
            <Flex>
              <InputBlock>
                <label htmlFor="category">Categoria</label>
                <Input id='category' type='text' list='categories' />
                <datalist id='categories'>
                  <option value='nenhuma' />
                  <option value='created' />
                </datalist>
              </InputBlock>
              <InputBlock>
                <label htmlFor="type">Tipo</label>
                <Input id='type' type='type' list='person'/>
                <datalist id='person'>
                  <option value='Pessoa física' />
                  <option value='Pessoa juridica' />
                </datalist>
              </InputBlock>
            </Flex>
            <Flex>
              <InputBlock>
                <label htmlFor='tel1'>Telefone 1</label>
                <Input id='tel1' type='tel' />
              </InputBlock>
              <InputBlock>
                <label htmlFor="tel2">Telefone 2</label>
                <Input id='tel2' type='tel' />
              </InputBlock>
            </Flex>
            <label htmlFor="note">Anotações</label>
            <textarea title='title' name="" id="note" ></textarea>
            <Button>Criar</Button>
          </BoxContent>
        </Aside>
      </Content>
    </Container>
  ) 
}

export default FinancialContacts;