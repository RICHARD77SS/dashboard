
import { BoxContentSt } from './styles';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const BoxContent = ({children}:Props) => {
  return (
    <BoxContentSt>

      {children}
    </BoxContentSt>
  )
}
export default BoxContent