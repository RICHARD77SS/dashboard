import { Graph } from './styles';

interface Props {
  children?: React.ReactNode;
}

const GraphContainer = ({children}:Props) => {
  return (
    <Graph>
      {children}
    </Graph>
  )
}


export default GraphContainer;