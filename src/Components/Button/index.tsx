import { Buttons } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}
const Button = ({ children, ...Props}: Props) => {
  return (
    <Buttons {...Props}>
      {children}
    </Buttons>
  )
}

export default Button;