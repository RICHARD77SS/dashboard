
import { useAxios } from "../../hooks/useAxios";
import BoxHeader from "../BoxHeader";
import Flex from "../Flex";
import Input from "../Input";

import { Container, Content, Block, Box, BoxContent } from './styles'
interface Props {

}
const PersonDetailsAditionalFields = (Props: Props) => {
  const { data } = useAxios('extraFields')
  console.log(data)
  return (
    <Container >
      <Content>
        <Block>
          {data?.extraFields?.map((fields: any) => {
            return (
              <Box>
                <BoxHeader title={fields.inputName}></BoxHeader>
                <BoxContent>
                  {fields.inputOption.map((input: any) => {
                    return (
                      <Flex>
                        <label htmlFor="">{input}</label>
                        <Input type={fields.inputType} />
                      </Flex>
                    )
                  })}
                </BoxContent>
              </Box>
            )
          })}
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