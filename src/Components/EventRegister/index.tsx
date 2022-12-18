import Button from '../Button'
import Input from '../Input'
import InputBlock from '../InputBlock'
import { Container, Content, Header, Main, Block, Navbar, Flex, FlexBetween, NavItem, NavButton, About, Box, Speakers, Programming, Table, TableFlex, TableDesc, Scribe, Form, Place, MapContainer, Payment } from './styles'

const EventRegister = () => {
  return (
    <Container>
      <Content>
        <Header>
          <h3>Lang</h3>
        </Header>
        <Main>
          <Block>
            <h3>12/12/2022 a 15/12/2022</h3>
            <h1>Event name</h1>
            <h5>Description</h5>
            <Button>Inscreva-se</Button>
            <h4>R$ 122,00</h4>
          </Block>
        </Main>
        <Navbar>
          <Flex>
            <NavItem>Sobre o evento</NavItem>
            <NavItem>Palestrantes</NavItem>
            <NavItem>Programação</NavItem>
            <NavItem>Local</NavItem>
            <NavButton>Inscreva-se</NavButton>
          </Flex>
        </Navbar>
        <About>
          <Block>
            <h1>Sobre o evento</h1>
          </Block>
          <Box>
            <FlexBetween>
              <Block>
                <h3>Descrição</h3>
                <p>description</p>
              </Block>
              <Block>
                <h3>Organizador</h3>
                <p>Name inc</p>
              </Block>
            </FlexBetween>
          </Box>
        </About>
        <Speakers>
          <br />
          <br />
          <Block>
            <h1>Palestrantes</h1>
          </Block>
          <Box>
            <Block>
              <h3>Name</h3>
              <p>description</p>
            </Block>
          </Box>
        </Speakers>
        <Programming>
          <Box>
            <Block>
              <h1>Programação</h1>
            </Block>
            <br />
            <Table>
              <TableFlex>
                <TableDesc>
                  <h1>1º DIA</h1>
                  <p>SEXTA-FEITA (16/12)</p>
                </TableDesc>
                <TableDesc>
                  <h2>12:00</h2>
                  <p>title</p>
                </TableDesc>
              </TableFlex>
            </Table>
          </Box>
        </Programming>
        <Scribe>
          <h1>Inscreva-se</h1>
          <Form>
            <Block>
              <h3>Preencha os campos:</h3>
              <Flex>
                <InputBlock>
                  <label htmlFor="name">Nome</label>
                  <Input id='name' type="text" required />
                </InputBlock>
                <InputBlock>
                  <label htmlFor="lastname">Sobrenome</label>
                  <Input id='lastname' type="text" required />
                </InputBlock>
                <InputBlock>
                  <label htmlFor="phone">Telefone</label>
                  <Input id='phone' type="text" />
                </InputBlock>
                <InputBlock>
                  <label htmlFor="email">E-mail</label>
                  <Input id='email' type="text" required />
                </InputBlock>
              </Flex>
              <Flex>
                <InputBlock>
                  <label htmlFor="address">Endereço</label>
                  <Input id='address' type="text" />
                </InputBlock>
                <InputBlock>
                  <label htmlFor="number">Numero</label>
                  <Input id='number' type="text" />
                </InputBlock>
                <InputBlock>
                  <label htmlFor="district">Bairro</label>
                  <Input id='district' type="text" />
                </InputBlock>
              </Flex>
              <Flex>
                <InputBlock>
                  <label htmlFor="cep">CEP</label>
                  <Input id='cep' type="text" />
                </InputBlock>
                <InputBlock>
                  <label htmlFor="country">Pais</label>
                  <Input id='country' type="text" />
                </InputBlock>
                <InputBlock>
                  <label htmlFor="state">Estado</label>
                  <Input id='state' type="text" />
                </InputBlock>
                <InputBlock>
                  <label htmlFor="city">Cidade</label>
                  <Input id='city' type="text" />
                </InputBlock>
              </Flex>
              <h2>Forma de pagamento:</h2>
              <Payment>
                <h3>Pix</h3>
                <p>R$123,00</p>
                <Input title='payment' name='payment' type='radio' />

              </Payment>
            </Block>
            <Flex>
              <Input id='politi' type='checkbox' />
              <label htmlFor="politi">Concordo em compartilhar meus dados com esta instituição, em conformidade com a LGPD e GDPR. Política de privacidade, Termos de uso</label>
            </Flex>
            <Button type='submit'>Enviar inscrição</Button>
          </Form>
        </Scribe>
        <Place>
          <Block>
            <h1>Local do evento</h1>
            <p>address here</p>
          </Block>
          <MapContainer>

          </MapContainer>
        </Place>
      </Content>
    </Container>
  )
}

export default EventRegister