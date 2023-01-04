import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

`

export const Content = styled.div`
  width: 400px;
  height: auto;
  background: #fff;
  border-radius: 10px;
  z-index: 150;
  button {
    padding: .5rem;
    border-radius: 20px;
    box-shadow: 5px 5px 5px 0 ${Props => Props.theme.colors.shadow};
    background:${Props => Props.theme.colors.red};
    color:${Props => Props.theme.colors.bac};

  }
  [type=submit],[name=new]{
    background:${Props => Props.theme.colors.green};
    color:${Props => Props.theme.colors.bac};
  }
`
export const BoxHeader = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: .5px solid black;
  border-radius: 10px 10px 0 0;

`

export const BoxContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: .5rem;
  padding: 1rem 0;
  input[type=text]{
    width: 350px;
  }
  textarea{
    min-width: 350px;
    max-width: 350px;
    max-height: 300px;
  }
`

export const BoxFooter = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items:center;
  justify-content:center;
  border-radius: 0 0 10px 10px;
  border-top: .5px solid black;
`
