import { TdSt } from './styles';


interface Props {
  children?: React.ReactNode;
  className?: string;
}
const Td = ({ children, className }: Props) => {
  return (
    <TdSt className={className}>{children}</TdSt>
  )
}

export default Td