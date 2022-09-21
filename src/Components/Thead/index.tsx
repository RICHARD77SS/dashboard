import { TheadSt} from './styles';


interface Props {
  children?: React.ReactNode;
}
const Thead = ({children}:Props) => {
  return (
      <TheadSt>{children}</TheadSt>
  )
}

export default Thead