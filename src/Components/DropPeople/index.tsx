import React from 'react';
import Button from '../Button';
import { Wrapper, Droped} from './styles'

const DropPeople = () => {
  const [dropedOpen, setDropedOpen] = React.useState(false);

  return (
    <Wrapper>
      <Button
        onMouseEnter={() => setDropedOpen(true)}
        onMouseLeave={() => setDropedOpen(false)}
      >People</Button>
      {dropedOpen ? 
        <>
          <Droped onMouseEnter={() => setDropedOpen(true)}
            onMouseLeave={() => setDropedOpen(false)}  className='droped'>
            <Button>menu</Button>
            <Button>menu</Button>
            <Button>menu</Button>
            <Button>menu</Button>
          </Droped>
        </>:null}
    </Wrapper>
  )
}

export default DropPeople;