import React from 'react'
import Button from '../Button';
import Input from '../Input';

import { Container, Form, Content, Fieldset, Data, Header, DataContent, Flex, Block, Foto, InputBlock, Radio } from './styles';


const AddGroup = () => {
  return (
    <Container>
      <Form>
        <legend>Adicionar Grupo</legend>
        <Content>
          <Fieldset>
            <Data>
              <Header>
                <h3>Informações</h3>
              </Header>
              <DataContent>
                <Flex>
                  <Block>
                    <label htmlFor="foto">Foto do grupo</label>
                    <Foto>

                    </Foto>
                  </Block>
                  <InputBlock>
                    <Block>
                      <label htmlFor="groupnome">Nome do grupo</label>
                      <Input type='text' />
                    </Block>
                  </InputBlock>
                </Flex>
                <Flex>
                  <Block>
                    <label htmlFor="creationdate">Data de Criação</label>
                    <Input type='date' />
                  </Block>
                  <Block>
                    <label htmlFor="weekday">Dia da semana</label>
                    <Input type='text' id='weekday' list='week' />
                    <datalist id='week'>
                      <option value="Domingo"></option>
                      <option value="Segunda-feira"></option>
                      <option value="Terça-feira"></option>
                      <option value="Quarta-feira"></option>
                      <option value="Quinta-feira"></option>
                      <option value="Sexta-feira"></option>
                      <option value="Sabado"></option>
                    </datalist>
                  </Block>
                </Flex>
                <Flex>
                  <Block>
                    <label htmlFor="perfil">Perfil</label>
                    <Input id='perfil' type='text' list='sex' />
                    <datalist id='sex'>
                      <option value="Feminino"></option>
                      <option value="Masculino"></option>
                      <option value="Ambos"></option>
                    </datalist>
                  </Block>
                  <Block>
                    <label htmlFor="period">Periodo</label>
                    <Input id='period' type='text' list='periodo' />
                    <datalist id='periodo'>
                      <option value="Manhã"></option>
                      <option value="Tarde"></option>
                      <option value="Noite"></option>
                    </datalist>
                  </Block>
                </Flex>
                <Flex>
                  <Block>
                    <Radio>
                      <Input id='famili' type='checkbox' />
                      <label htmlFor="famili">Familias</label>
                    </Radio>
                    <Radio>
                      <Input id='couples' type='checkbox' />
                      <label htmlFor="couples">Casais</label>
                    </Radio>
                    <Radio>
                      <Input id='adults' type='checkbox' />
                      <label htmlFor="adults">Adultos</label>
                    </Radio>
                  </Block>
                  <Block>
                    <Radio>
                      <Input id='jovens' type='checkbox' />
                      <label htmlFor="jovens">Jovens</label>
                    </Radio>
                    <Radio>
                      <Input id='jovens' type='checkbox' />
                      <label htmlFor="jovens">Adolescentes</label>
                    </Radio>
                    <Radio>
                      <Input id='jovens' type='checkbox' />
                      <label htmlFor="jovens">Crianças</label>
                    </Radio>
                  </Block>
                </Flex>
              </DataContent>
            </Data>
            <Data>
              <Header>
                <h3>Liderança</h3>
              </Header>
              <DataContent>
                <Block>
                  <label htmlFor="origin">Grupo de origem</label>
                  <Input id='origin' type='text' list='groups' />
                  <datalist id='groups'>
                    <option value="Group name"></option>
                  </datalist>
                </Block>
                <Block>
                  <label htmlFor="lider1">Lider 1</label>
                  <Input id='lider1' type='text' list='peoples' />
                  <datalist id='peoples'>
                    <option value="User name"></option>
                  </datalist>
                </Block>
                <Block>
                  <label htmlFor="lider2">Lider 2</label>
                  <Input id='lider2' type='text' list='peoples' />
                  <datalist id='peoples'>
                    <option value="User name"></option>
                  </datalist>
                </Block>
                <Block>
                  <label htmlFor="lider3">Lider 3</label>
                  <Input id='lider3' type='text' list='peoples' />
                  <datalist id='peoples'>
                    <option value="User name"></option>
                  </datalist>
                </Block>
                <Block>
                  <label htmlFor="lider4">Lider 4</label>
                  <Input id='lider4' type='text' list='peoples' />
                  <datalist id='peoples'>
                    <option value="User name"></option>
                  </datalist>
                </Block>
              </DataContent>
            </Data>
          </Fieldset>
          <Fieldset>
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
        <Flex>
          <Button type='submit'>Salvar</Button>
          <Button type='button'>Voltar</Button>
        </Flex>
      </Form>
    </Container>
  )
}

export default AddGroup