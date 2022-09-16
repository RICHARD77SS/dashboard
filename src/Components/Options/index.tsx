import { Option } from "./styles";

interface Props {
  children?: React.ReactNode;
}
const Options = ({children}:Props) => {
  return (
    <Option>
      {children}
    </Option>
  )
}

export default Options;