import { Flexstart } from "./styles";
interface Props{
  children?: React.ReactNode;
}
const Content = ({children}:Props) => {
  return (
    <Flexstart>
      {children}
    </Flexstart>
  )
}

export default Content;