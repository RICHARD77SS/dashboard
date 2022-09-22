import { BoxSt } from './styles'

interface Props {
  children?: React.ReactNode;
}

const Box = ({ children }: Props) => {
  return (
    <BoxSt>
      {children}
    </BoxSt>
  )
}


export default Box;