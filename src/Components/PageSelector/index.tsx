import Button from '../Button';
import { Page } from './styles';

interface Props {
  previus?: () => void
  next?: () => void
  children?: number
}
const PageSelector = ({ previus, next, children }: Props) => {
  return (
    <Page>
      <Button onClick={previus} disabled={children === 1 ? true : false}>Anterior</Button>
      <Button >{children}</Button>
      <Button onClick={next}>Próximo</Button>
    </Page>
  )
}

export default PageSelector;