import { BoxSt } from './styles'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
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