import { WrapperSt } from "./styles";

type Children = React.ReactNode

interface Props {
  children?: Children;
}
const Wrapper = ({children}:Props) => {
  return (
    <WrapperSt>
      {children}
    </WrapperSt>
  )
}

export default Wrapper;
