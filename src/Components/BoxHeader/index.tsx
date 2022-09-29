
import { BoxHeaderSt } from './styles';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
}
const BoxHeader = ({children, title}:Props) => {
  return (
    <BoxHeaderSt>
      <h3>{title}</h3>
      {children}
    </BoxHeaderSt>
  )
}
export default BoxHeader