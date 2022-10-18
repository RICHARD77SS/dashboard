import { TbodySt} from './styles';


interface Props {
  children?: React.ReactNode;
  id?: string;
}
const Tbody = ({children}:Props) => {
  return (
      <TbodySt>{children}</TbodySt>
  )
}

export default Tbody