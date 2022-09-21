import { TbodySt} from './styles';


interface Props {
  children?: React.ReactNode;
}
const Tbody = ({children}:Props) => {
  return (
      <TbodySt>{children}</TbodySt>
  )
}

export default Tbody