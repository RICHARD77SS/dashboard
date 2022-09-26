import { InputBlocks } from "./styles";

interface Props {
  children?: React.ReactNode;
}
const InputBlock = ({children}:Props) => {
  return (
    <InputBlocks>
      {children}
    </InputBlocks>
  )
}

export default InputBlock;