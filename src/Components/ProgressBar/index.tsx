
import { Output, Fill} from "./styles";


interface Props {
  value: string;
  color: string;
}
const ProgressBar = (Props:Props) => {
  return (
    <Output>
      <Fill value={Props.value} color={Props.color} />
    </Output>
  )
}

export default ProgressBar;