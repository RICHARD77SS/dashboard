import styled from 'styled-components';
interface Props {
  cardBg?: string;
}
export const CardBacks = styled.div<Props>`
  width: 100%;
  height: 380px;
  background: #eee;
  border-radius: 10px;
  background-image: url(${Props => Props.cardBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  img{
    position:absolute;
    width: fit-content;
  }
  h3{
    position:absolute;
    width: fit-content;
  }
  span{
    position:absolute;
    width: fit-content;
  }
  h4{
    position:absolute;
    width: fit-content;
  }
  h5{
    position:absolute;
    width: fit-content;
  }
  p{
    position:absolute;
    width: fit-content;
  }
`
export const Options = styled.div<Props>`
  max-width: 200px;
  height: auto;
  background: #ddd;
  border-radius: 10px;
`
export const Flex = styled.div<Props>`
  width: 100%;
  height: auto;
  display:flex;
`