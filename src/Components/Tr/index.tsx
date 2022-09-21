import { TrSt} from './styles';


interface Props {
  children?: React.ReactNode;
}
const Tr = ({children}:Props) => {
  return (
      <TrSt>{children}</TrSt>
  )
}

export default Tr;