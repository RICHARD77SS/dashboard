import Block from "../Block";
import Button from "../Button";
import Flex from "../Flex";
import FlexBetween from "../FlexBetween";
import Input from "../Input";
import InputBlock from "../InputBlock";

import { Container, Content, Box, BoxHeader, BoxContent, BoxFlex, BoxBLock, Bg, BoxFooter, Closed } from './styles'

interface Props {
  children?: React.ReactNode;
  onClick?: any;
}
const MuralsAddText = ({ children, onClick }: Props) => {
  return (
    <Container >
      <Content>
        <Box>
          <BoxHeader>
            <FlexBetween>
              <h3>Adicionar</h3>
              {children}
            </FlexBetween>
          </BoxHeader>
          <BoxContent>
            <Input placeholder='título' type='text' />
            <textarea placeholder='Descrição' title='text' name="" id="" ></textarea>
            <FlexBetween>
              <Flex>
                <p>Cor do texto</p>
                <Input type='color' />
              </Flex>
              <Flex>
                <p>Cor do fundo</p>
                <Input type='color' />
              </Flex>
            </FlexBetween>
            <Block>
              <p>Extilo do fundo</p>
              <BoxFlex>
                <BoxBLock>
                  <Bg>Texto</Bg>
                  <Input name='text' type='radio' />
                </BoxBLock>
                <BoxBLock>
                  <Bg>Texto</Bg>
                  <Input name='text' type='radio' />
                </BoxBLock>
                <BoxBLock>
                  <Bg>Texto</Bg>
                  <Input name='text' type='radio' />
                </BoxBLock>
              </BoxFlex>
            </Block>
            <FlexBetween>
              <InputBlock>
                <p>Status</p>
                <Flex>
                  <Input name='status' id='publi' type='radio' />
                  <label htmlFor="publi">Publicado</label>
                </Flex>
                <Flex>
                  <Input name='status' id='despubli' type='radio' />
                  <label htmlFor="despubli">Despublicado</label>
                </Flex>
              </InputBlock>
              <InputBlock>
                <p>Despublicar automaticamente</p>
                <Flex>
                  <Input name='despublicar' id='never' type='radio' />
                  <label htmlFor="never">Nunca</label>
                </Flex>
                <Flex>
                  <Input name='despublicar' id='postdate' type='radio' />
                  <label htmlFor="postdate">Após esta data</label>
                </Flex>
              </InputBlock>
            </FlexBetween>
            <InputBlock>
              <label htmlFor="link">Link externo</label>
              <Input type='text' />
            </InputBlock>
            <Flex>
              <Input type='checkbox' />
              <label htmlFor="notification">Enviar notificação push</label>
            </Flex>
          </BoxContent>
          <BoxFooter>
            <Button>Salvar</Button>
          </BoxFooter>
        </Box>
      </Content>
      <Closed onClick={onClick}></Closed>
    </Container>
  )
}
export default MuralsAddText;