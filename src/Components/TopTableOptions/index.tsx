import Button from '../Button';
import { Flex, Results, Options } from './styles';
import { AiOutlineCopy, AiOutlineDownload, AiOutlinePrinter, AiOutlineEye } from 'react-icons/ai';
import Input from '../Input';
import React from 'react'
import ModalColumn from '../ModalColumn';
interface Props {
  children?: React.ReactNode;
}

const TopTableOptions = ({ children }: Props) => {
  const [modal, setModal] = React.useState(false)
  return (
    <Flex>
      <Results>
        <Input id='result' list='numbers' type='number' step='20' min='20' max='400' />
        <label htmlFor='result'>Resultados por página</label>
      </Results>
      <Options>
        <Button><AiOutlineCopy /></Button>
        <Button><AiOutlineDownload /></Button>
        <Button><AiOutlinePrinter /></Button>
        <Button onClick={() => { setModal(true) }}><AiOutlineEye />Colunas</Button>
      </Options>
      {modal ?
        <ModalColumn onClick={() => { setModal(false) }}>
          {children}
        </ModalColumn>
        : null}
    </Flex>
  )
}

export default TopTableOptions;