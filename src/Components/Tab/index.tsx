
type Props = {
  id?: string;
  title: string;
  children: React.ReactNode;
}


const Tab = (Props: Props) => {
  return <div>{Props.children}</div>
}

export default Tab