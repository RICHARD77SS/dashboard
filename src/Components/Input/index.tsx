import React from 'react';
import { Inputc } from "./styles";


interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.MutableRefObject<HTMLInputElement | null>
}

const Input = (Props: Props) => {
  return (
    <Inputc {...Props} />
  )
}

export default Input