
import Block from "../Block"
import Box from "../Box"
import BoxContent from "../BoxContent"
import BoxHeader from "../BoxHeader"
import Button from "../Button"
import Container from "../Container"
import Content from "../Content"
import Flex from "../Flex"
import Input from "../Input"
import InputBlock from "../InputBlock"

import { BoxFlex, Side, Make, CardContent, CardComplete, Backgrounds, Bg } from './styles'

const CardMake = () => {
  return (
    <Container>
      <Content>
        <Block>
          <Box>
            <BoxHeader title='Frente do cartão'>
              <Input placeholder='Nome do cartão' type='text' />
              <Flex>
                <Button>Salvar</Button>
                <Button>Cancelar</Button>
              </Flex>
            </BoxHeader>
            <BoxContent>
              <BoxFlex>
                <Side>
                  <Flex>
                    <p>Titulos e legenda</p>
                    <Input type='color' />
                  </Flex>
                  <Flex>
                    <p>Texto dentro dos</p>
                    <Input type='color' />
                  </Flex>
                  <Flex>
                    <p>Texto Personalizado</p>
                    <Input type='color' />
                  </Flex>
                  <Flex>
                    <p>Fundo do cartão</p>
                    <Input type='color' />
                  </Flex>
                </Side>
                <Make>
                  <CardContent>
                    <CardComplete>
                      <img src="" alt="" />
                      <InputBlock>
                        <img src="" alt="" />
                        <p>12384</p>
                      </InputBlock>
                      <h3>title</h3>
                      <span>Local</span>
                      <h4>Cartão de membro</h4>
                      <InputBlock>
                        <h5>Nome completo</h5>
                        <p>Nome here</p>
                      </InputBlock>
                      <InputBlock>
                        <h5>Cargos</h5>
                        <p>Diretor</p>
                      </InputBlock>
                      <InputBlock>
                        <h5>Estado civil</h5>
                        <p>Casado(a)</p>
                      </InputBlock>
                      <InputBlock>
                        <h5>Data de nascimento</h5>
                        <p>30/08/2000</p>
                      </InputBlock>
                    </CardComplete>
                    <Backgrounds>
                      <Bg>
                        <img src="" alt="" />
                      </Bg>
                      <Bg>
                        <img src="" alt="" />
                      </Bg>
                    </Backgrounds>
                  </CardContent>
                </Make>
              </BoxFlex>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Verso do cartão'>
            </BoxHeader>
            <BoxContent>
              <BoxFlex>
                <Side>
                  <Flex>
                    <p>Titulos e legenda</p>
                    <Input type='color' />
                  </Flex>
                  <Flex>
                    <p>Texto dentro dos</p>
                    <Input type='color' />
                  </Flex>
                  <Flex>
                    <p>Texto Personalizado</p>
                    <Input type='color' />
                  </Flex>
                  <Flex>
                    <p>Fundo do cartão</p>
                    <Input type='color' />
                  </Flex>
                </Side>
                <Make>
                  <CardContent>
                    <CardComplete>
                      <img src="" alt="" />
                      <InputBlock>
                        <img src="" alt="" />
                        <p>12384</p>
                      </InputBlock>
                      <h3>title</h3>
                      <span>Local</span>
                      <h4>Cartão de membro</h4>
                      <InputBlock>
                        <h5>Nome completo</h5>
                        <p>Nome here</p>
                      </InputBlock>
                      <InputBlock>
                        <h5>Cargos</h5>
                        <p>Diretor</p>
                      </InputBlock>
                      <InputBlock>
                        <h5>Estado civil</h5>
                        <p>Casado(a)</p>
                      </InputBlock>
                      <InputBlock>
                        <h5>Data de nascimento</h5>
                        <p>30/08/2000</p>
                      </InputBlock>
                    </CardComplete>
                    <Backgrounds>
                      <Bg>
                        <img src="" alt="" />
                      </Bg>
                      <Bg>
                        <img src="" alt="" />
                      </Bg>
                    </Backgrounds>
                  </CardContent>
                </Make>
              </BoxFlex>
            </BoxContent>
          </Box>
        </Block>
      </Content>
    </Container>
  )
}

export default CardMake;