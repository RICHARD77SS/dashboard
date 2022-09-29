import styled from 'styled-components'

interface Props {
  value: string;
  color: string;
}

export const Output = styled.div`
  width: 100%;
  height: 30px;
  background: #eee;
  display: flex;
  justify-content: flex-start;
`
export const Fill= styled.div<Props>`
  width: ${Props => Props.value};
  height: 30px;
  background: ${Props => Props.color};
`
