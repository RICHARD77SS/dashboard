import { BoxSt } from './styles'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const BoxB = ({ children }: Props) => {
  return (
    <BoxSt>
      {children}
    </BoxSt>
  )
}


export default BoxB;