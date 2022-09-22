import { ContainerSt } from './styles';
interface Props {
  children?: React.ReactNode;
}
const Container = ({children}:Props) => {
  return (
    <ContainerSt>
      {children}
    </ContainerSt>
  )
}
export default Container