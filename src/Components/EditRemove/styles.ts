import styled from 'styled-components';

export const Flex = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  padding: 0 .5rem;
  gap: .5rem;
  button {
    font-size: .8rem;
    padding: .5rem;
    border-radius: 10px;
    color: #fff;
    background:${Props => Props.theme.colors.sec};
  }
`