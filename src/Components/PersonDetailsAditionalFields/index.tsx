
import { IndexType } from "typescript";
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
          {data?.extraFields?.map((fields: any, index: any) => {

            return (
              <Box key={index}>
                <BoxHeader title={fields.inputName}></BoxHeader>
                <BoxContent>
                  {fields.inputOption.map((input: any, index: any) => {
                    return (
                      <Flex key={index}>
                        <label htmlFor="">{input}</label>
                        <Input disabled name='input' type={fields.inputType} />
                      </Flex>
                    )
                  })}
                </BoxContent>
              </Box>
            )
          })}
        </Block>
      </Content>
    </Container>
  )
}

export default PersonDetailsAditionalFields;