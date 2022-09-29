import Box from "../Box";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import Input from "../Input";

import { BoxRet, BoxRetHeader, BoxRetContent, DivLink, LinkPub, } from './styles'
import { AiOutlineLink } from 'react-icons/ai';
import Flex from "../Flex";

const OverviewSite = () => {
  return (
    <Container>
      <Content>
        <BoxRet>
          <BoxRetHeader>
            <Flex>
              <Input type='checkbox' />
              <h3>Ativar site</h3>
            </Flex>
            <Button>Salvar</Button>
          </BoxRetHeader>
          <BoxRetContent>
            <DivLink>
              <h4>www.link.com/</h4>
            </DivLink>
            <Input type='text' />
            <DivLink>
              <p>(Apenas letras, números e underline)</p>
            </DivLink>
          </BoxRetContent>
        </BoxRet>

        <BoxRet>
          <BoxRetHeader>
            <h3>Link de cadastro público</h3>
            <Button>Habilitar</Button>
          </BoxRetHeader>
          <BoxRetContent>
            <LinkPub>
              <p>Ativar link público para que as pessoas se cadastrem diretamente.</p>
              <span><AiOutlineLink />https://www.link.com/ref</span>
            </LinkPub>
          </BoxRetContent>
        </BoxRet>
      </Content>
    </Container>
  )
}

export default OverviewSite;