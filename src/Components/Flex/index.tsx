
import { FlexSt } from './styles'

interface Props {
  children?: React.ReactNode;
}
const Flex = ({children}:Props) => {
  return (
    <FlexSt>
      {children}
    </FlexSt>
  )
}

export default Flex;