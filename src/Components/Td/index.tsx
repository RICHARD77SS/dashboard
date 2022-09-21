import { TdSt} from './styles';


interface Props {
  children?: React.ReactNode;
}
const Td = ({children}:Props) => {
  return (
      <TdSt>{children}</TdSt>
  )
}

export default Td