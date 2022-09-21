
import { TableSt} from './styles'


interface Props {
  children?: React.ReactNode

}

const Table = ({children}:Props) => {
  return (
    <TableSt>
      {children}
    </TableSt>
  )
}

export default Table;