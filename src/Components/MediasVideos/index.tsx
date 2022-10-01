import Aside from "../Aside";
import Box from "../Box";
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import Content from "../Content";
import Input from "../Input";
import InputBlock from "../InputBlock";

import { AsideContent } from './styles';

const MediaVideos = () => {
  return (
    <Container>
      <h3>Álbuns de Videos</h3>
      <Content>
        <Box>
          <BoxHeader title="Resultados: 0" >
            <Button>Editar</Button>
            <Button>Remover</Button>
          </BoxHeader>
          <BoxContent>
            <Content>

            </Content>
          </BoxContent>
        </Box>
        <Aside>
          <BoxHeader title="+ Criar álbum" />
          <BoxContent>
            <AsideContent>
              <InputBlock>
                <label htmlFor="name">Titulo</label>
                <Input type='text' />
              </InputBlock>
              <InputBlock>
                <label htmlFor="description">Descrição</label>
                <textarea title='area' name="" id="" ></textarea>
              </InputBlock>
              <Button>Criar</Button>
            </AsideContent>

          </BoxContent>
        </Aside>
      </Content>
    </Container>
  )
}

export default MediaVideos;