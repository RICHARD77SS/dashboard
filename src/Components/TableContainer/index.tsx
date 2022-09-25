
import { TableContainerSt } from "./styles";

interface Props {
  children?: React.ReactNode;
}
const TableContainer = ({children}:Props) => {
  return (
    <TableContainerSt>
      {children}
    </TableContainerSt>
  )
}

export default TableContainer;