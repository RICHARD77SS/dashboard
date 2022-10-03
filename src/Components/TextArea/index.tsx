
import { TextAreaSt } from './styles';

interface Props {
  children?: React.ReactNode;
  height?: string;
}

const TextArea = ({children, height='600px'}:Props) => {
  return (
    <TextAreaSt height={height}>
      {children}
    </TextAreaSt>
  )
}

export default TextArea