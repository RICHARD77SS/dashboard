
import { BoxContentSt } from './styles';
interface Props {
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