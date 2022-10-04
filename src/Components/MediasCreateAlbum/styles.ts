import styled from 'styled-components'

export const Submit = styled.button`
  width: 100%;
  min-height: 300px;
  border: 1px dashed #ddd;
  border-radius: 10px;
  display: flex;
  align-items:center;
  justify-content: center;
  h4 {
    position: absolute;

  }
  input {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
  :hover {
    filter: brightness(.8);
  }
`
export const Flex1 = styled.div`
  width: 100%; 
  max-height: 300px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  img {
    width: 150px;
    height: 100px;
  }
`