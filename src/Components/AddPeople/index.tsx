import React from 'react'
import Button from '../Button';
import Input from '../Input';

import { Container, Form, Content, Fieldset, Data, Header, DataContent, Flex, Block, Foto, InputBlock, Radio } from './styles';


const AddPeople = () => {
  return (
    <Container>
      <Form>
        <legend>Adicionar pessoas</legend>
        <Content>
          <Fieldset>
            <Data>
              <Header>
                <h3>Dados pessoais</h3>
              </Header>
              <DataContent>
                <Flex>
                  <Block>
                    <label htmlFor="foto">Foto</label>
                    <Foto>

                    </Foto>
                  </Block>
                  <InputBlock>
                    <Block>
                      <label htmlFor="nome">Nome</label>
                      <Input type='text' />
                    </Block>
                    <Block>
                      <label htmlFor="senha">Senha</label>
                      <Input type='text' />
                    </Block>
                  </InputBlock>
                </Flex>
                <Flex>
                  <Block>
                    <label htmlFor="nascimento">Data de nascimento</label>
                    <Input type='date' />
                  </Block>
                  <Block>
                    <label htmlFor="sexo">Sexo</label>
                    <Radio>
                      <Input id='masculino' type='radio' />
                      <label htmlFor="masculino">Masculino</label>
                      <Input id='faminino' type='radio' />
                      <label htmlFor="faminino">Faminino</label>
                    </Radio>
                  </Block>
                </Flex>
                <Flex>
                  <Block>
                    <label htmlFor="escoolink">Escolaridade</label>
                    <Input id='state' type='text' />
                  </Block>
                  <Block>
                    <label htmlFor="state">Estado civil</label>
                    <Input id='state' type='text' />
                  </Block>
                </Flex>
                <Block>
                  <label htmlFor="document1">Documento 1</label>
                  <Input id='document1' type='text' />
                </Block>
                <Block>
                  <label htmlFor="document1">Documento 2</label>
                  <Input id='document2' type='text' />
                </Block>
              </DataContent>
            </Data>
            <Data>
              <Header>
                <h3>Outras informações</h3>
              </Header>
              <DataContent>
                <Block>
                  <label htmlFor="group">Grupo</label>
                  <Input id='group' type='text' />
                </Block>
                <Block>
                  <label htmlFor="categorie">Categoria</label>
                  <Input id='categorie' type='text' />
                </Block>
                <Block>
                  <label htmlFor="office">Cargo</label>
                  <Input id='office' type='text' />
                </Block>
                <Block>
                  <label htmlFor="cdata ">Data da conversão</label>
                  <Input id='cdata' type='data' />
                </Block>
                <Block>
                  <label htmlFor="batizado">Batizado</label>
                  <Radio>
                    <Input id='sim' type='radio' />
                    <label htmlFor="sim">Sim</label>
                  </Radio>
                  <Radio>
                    <Input id='nao' type='radio' />
                    <label htmlFor="nao">Não</label>
                  </Radio>
                </Block>
              </DataContent>
            </Data>
          </Fieldset>
          <Fieldset>
            <Data>
              <Header>
                <h3>Contatos</h3>
              </Header>
              <DataContent>
                <Flex>
                  <Block>
                    <label htmlFor="tel1">Telefone 1</label>
                    <Input id='tel1' type='tel' />
                  </Block>
                  <Block>
                    <label htmlFor="tel2">Telefone 2</label>
                    <Input id='tel1' type='tel' />
                  </Block>
                </Flex>
                <Block>
                  <label htmlFor="email">Email</label>
                  <Input id='email' type='email' />
                </Block>
              </DataContent>
            </Data>
            <Data>
              <Header>
                <h3>Endereço</h3>
              </Header>
              <DataContent>
                <Block>
                  <label htmlFor="address">Endereço</label>
                  <Input id='address' type='text' />
                </Block>
                <Block>
                  <label htmlFor="number">Numero</label>
                  <Input id='number' type='text' />
                </Block>
                <Flex>
                  <Block>
                    <label htmlFor="district">Bairro</label>
                    <Input id='district' type='text' />
                  </Block>
                  <Block>
                    <label htmlFor="cep">CEP</label>
                    <Input id='cep' type='text' />
                  </Block>
                </Flex>
                <Flex>
                  <Block>
                    <label htmlFor="country">País</label>
                    <Input id='country' type='text' />
                  </Block>
                  <Block>
                    <label htmlFor="state">Estado</label>
                    <Input id='state' type='text' />
                  </Block>
                </Flex>
                <Block>
                  <label htmlFor="city">Cidade</label>
                  <Input id='city' type='text' />
                </Block>
              </DataContent>
            </Data>
            <Data>
              <Header>
                <h3>Anotações</h3>
              </Header>
              <DataContent>
                <textarea title='notation' name="" id="" cols={30} rows={10}></textarea>
              </DataContent>
            </Data>
          </Fieldset>
        </Content>
        <Data>
          <Header>
            <h3>Campos adicionais</h3>
          </Header>
          <DataContent>

          </DataContent>
        </Data>
        <Block>
          <Input type='checkbox' />
          <p>Sou consciente das minhas responsabilidades com os dados cadastrados, em conformidade com a LGPD e GDPR. <a href="/">Termos de uso, Políticas de privacidade</a> </p>
        </Block>
        <Button type='submit'>Salvar dados</Button>
      </Form>
    </Container>
  )
}

export default AddPeople