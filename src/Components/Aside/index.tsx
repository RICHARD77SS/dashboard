import { AsideSt } from './styles'
interface Props {
  children?: React.ReactNode;
}
const Aside = ({children}:Props) => {
  return (
    <AsideSt>
      {children}
    </AsideSt>
  )
}

export default Aside;