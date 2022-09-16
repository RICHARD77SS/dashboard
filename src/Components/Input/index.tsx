import React from 'react';
import { Inputc } from "./styles";


interface Props extends React.InputHTMLAttributes<HTMLInputElement> {

}

const Input = (Props:Props) => {
  return (
    <Inputc {...Props} />
  )
}

export default Input