import styled from 'styled-components';
interface Props {
  cardBg?: string;
}
export const CardFronts = styled.div<Props>`
  max-width: 1200px;
  height: 380px;
  background: #eee;
  border-radius: 10px;
  background-image: url(${Props => Props.cardBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`