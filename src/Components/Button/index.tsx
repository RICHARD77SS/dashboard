import { Buttons } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}
const Button = ({ children }: Props) => {
  return (
    <Buttons>

    </Buttons>
  )
}

export default Button;