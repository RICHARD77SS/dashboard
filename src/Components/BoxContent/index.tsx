
import { BoxContentSt } from './styles';


interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: string;
  height?: string;
}
const BoxContent = ({ children, width, height }: Props) => {
  return (
    <BoxContentSt width={width} height={height}>
      {children}
    </BoxContentSt>
  )
}
export default BoxContent