import { ThSt} from './styles';


interface Props {
  children?: React.ReactNode;
}
const Th = ({children}:Props) => {
  return (
      <ThSt>{children}</ThSt>
  )
}

export default Th