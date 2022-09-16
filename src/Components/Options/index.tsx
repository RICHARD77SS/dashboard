import { Option } from "./styles";

interface Props  {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  
}
const Options = ({children, ...Props}:Props) => {
  return (
    <Option {...Props}>
      {children}
    </Option>
  )
}

export default Options;