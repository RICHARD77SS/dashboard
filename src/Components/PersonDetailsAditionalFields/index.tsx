

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
            if (fields?.inputType === 'checkbox') {
              return (
                <Box key={index}>
                  <BoxHeader title={fields?.inputName}></BoxHeader>

                  <BoxContent>
                    <Flex>
                      <Input type={fields.inputType} name='' />
                      <label htmlFor="">
                        {fields?.inputOption?.option1}
                      </label>
                    </Flex>
                    <Flex>
                      <Input type={fields.inputType} name='' />
                      <label htmlFor="">
                        {fields?.inputOption?.option2}
                      </label>
                    </Flex>
                    <Flex>
                      <Input type={fields.inputType} name='' />
                      <label htmlFor="">
                        {fields?.inputOption?.option3}
                      </label>
                    </Flex>
                  </BoxContent>
                </Box>)
            }
            if (fields?.inputType === 'radio') {
              return (
                <Box key={index}>
                  <BoxHeader title={fields?.inputName}></BoxHeader>

                  <BoxContent>
                    <Flex>
                      <Input type={fields.inputType} name='' />
                      <label htmlFor="">
                        {fields?.inputOption?.option1}
                      </label>
                    </Flex>
                    <Flex>
                      <Input type={fields.inputType} name='' />
                      <label htmlFor="">
                        {fields?.inputOption?.option2}
                      </label>
                    </Flex>
                    <Flex>
                      <Input type={fields.inputType} name='' />
                      <label htmlFor="">
                        {fields?.inputOption?.option3}
                      </label>
                    </Flex>
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