
import BoxHeader from "../BoxHeader";

import { Container, Content, Block, Box, BoxContent } from './styles'
interface Props {
  
}
const PersonDetailsAditionalFields = (Props: Props) => {
  return (
    <Container >
      <Content>
        <Block>
          <Box>
            <BoxHeader title='Dados pessoais'></BoxHeader>
            <BoxContent>
              
            </BoxContent>
          </Box>
        </Block>

        <Block>
          <Box>
            <BoxHeader title='Contatos'></BoxHeader>
            <BoxContent>
              
            </BoxContent>
          </Box>
    
        </Block>
      </Content>
    </Container>
  )
}

export default PersonDetailsAditionalFields;