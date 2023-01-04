import { Closed } from "./styles";

interface Props {
  onClick:()=>void
}
const Close =({onClick}:Props)=>{
  return (
    <Closed onClick={onClick}></Closed>
  )
}

export default Close