import { ButtonContainers } from "./styles";

interface Props {
  children?: React.ReactNode;
}
const ButtonContainer = ({children}:Props) => {
  return (
    <ButtonContainers>
      {children}
    </ButtonContainers>
  )
}

export default ButtonContainer;