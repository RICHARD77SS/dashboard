import { BoxSt } from './styles'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: string;
  height?: string;
}

const Box = ({ children,width,height }: Props) => {
  return (
    <BoxSt width={width} height={height}>
      {children}
    </BoxSt>
  )
}


export default Box;