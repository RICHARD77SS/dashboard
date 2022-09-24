import Button from '../Button';
import { Flex,Results,Options} from './styles';
import { AiOutlineCopy, AiOutlineDownload, AiOutlinePrinter, AiOutlineEye } from 'react-icons/ai';
import Input from '../Input';

interface Props {
  children?: React.ReactNode;
}

const TopTableOptions = ({children}:Props) => {
  return (
    <Flex>
      <Results>
        <Input id='result' list='numbers' type='number' step='20' min='20' max='400' />
        <label htmlFor='result'>Resultados por página</label>
      </Results>
      {children}
      <Options>
        <Button><AiOutlineCopy /></Button>
        <Button><AiOutlineDownload /></Button>
        <Button><AiOutlinePrinter /></Button>
        <Button><AiOutlineEye />Colunas</Button>
      </Options>
    </Flex>
  )
}

export default TopTableOptions;