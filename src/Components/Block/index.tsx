import { BlockSt } from "./styles";


interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const Block = ({children}:Props) => {
  return (
    <BlockSt>
      {children}
    </BlockSt>
  )
}

export default Block;