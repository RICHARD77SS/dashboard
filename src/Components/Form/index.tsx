import { Forms } from './styles'
interface Props {
  onSubmit: React.FormEventHandler<HTMLFormElement>
  children: React.ReactNode
}
const Form = ({ onSubmit, children }: Props) => {
  return (
    <Forms onSubmit={onSubmit}>
      {children}
    </Forms>
  )
}

export default Form;