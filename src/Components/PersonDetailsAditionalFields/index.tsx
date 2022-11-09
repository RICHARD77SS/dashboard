

import { useAxios } from "../../hooks/useAxios";
import BoxHeader from "../BoxHeader";
import Flex from "../Flex";
import Input from "../Input";

import { Container, Content, Block, Box, BoxContent } from './styles'
interface Props {

}
const PersonDetailsAditionalFields = (Props: Props) => {
  const { data } = useAxios('extraFields')
  return (
    <Container >
      <Content>
        <Block>
          {data?.extraFields?.map((fields: any, index: any) => {
            if (fields?.inputType === 'checkbox') {
              return (
                <Box key={index}>
                  <BoxHeader title={fields?.inputName}></BoxHeader>

                  <BoxContent>
                    {Object.keys(fields?.inputOption).map((option: string, index: number) => {
                      return (
                        <Flex>
                          <Input type={fields.inputType} name='' />
                          <label htmlFor="">
                            {fields?.inputOption[option]}
                          </label>
                        </Flex>
                      )
                    })}
                  </BoxContent>
                </Box>)
            }
            if (fields?.inputType === 'radio') {
              return (
                <Box key={index}>
                  <BoxHeader title={fields?.inputName}></BoxHeader>

                  <BoxContent>
                    {Object.keys(fields?.inputOption).map((option: string, index: number) => {
                      return (
                        <Flex>
                          <Input type={fields.inputType} name='' />
                          <label htmlFor="">
                            {fields?.inputOption[option]}
                          </label>
                        </Flex>
                      )
                    })}
                  </BoxContent>
                </Box>)
            }
            if (fields?.inputType === 'text') {
              return (
                <Box key={index}>
                  <BoxHeader title={fields?.inputName}></BoxHeader>
                  <BoxContent>
                    <Flex>
                      <Input type={fields.inputType} name='' />
                    </Flex>
                  </BoxContent>
                </Box>)
            }
            if (fields?.inputType === 'textarea') {
              return (
                <Box key={index}>
                  <BoxHeader title={fields?.inputName}></BoxHeader>
                  <BoxContent>
                    <Flex>
                      <textarea title='textarea'></textarea>
                    </Flex>
                  </BoxContent>
                </Box>)
            }
            return (
              <>
              </>
            )
          })}
        </Block>
      </Content>
    </Container>
  )
}

export default PersonDetailsAditionalFields;