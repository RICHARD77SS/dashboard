
import { FlexSt } from './styles'

interface Props {
  children?: React.ReactNode;
}
const FlexBetween = ({children}:Props) => {
  return (
    <FlexSt>
      {children}
    </FlexSt>
  )
}

export default FlexBetween;