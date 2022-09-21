import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  h3{
    margin: 1rem;
  }
`
export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  gap: 1rem;
`
export const Box = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Props => Props.theme.colors.bac};
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
`
export const BoxHeader = styled.header`
  width: 100%;
  height: 50px;
  padding: 1rem;
  display: flex;
  align-items:center;
  border-bottom: 1px solid ${Props => Props.theme.colors.pri};

`
export const BoxContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 1rem;
`
export const CardsContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
`
export const Card = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  display:flex;
  align-items:center;
  justify-content: start;
  flex-direction: column;
  gap: .1rem;
  background: ${Props => Props.theme.colors.pri};
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.8);
  h4 {
    margin-top: 3rem;
  }
  button {
    width: 90%;
    min-height: 40px;
    border-radius: 20px;
    margin: 1rem;
    display:flex;
    align-items:center;
    justify-content: center;
    font-size: 1rem;
    color: #f4f4f4;
    border:1px solid #f4f4f4;
  }
`
export const CardBg = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 10px 10px 0 0;
  img{
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
 }
`
export const CardImg = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  position: absolute;
  transform: translateY(3rem);
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.8);
  img{
    width: 100%;
    height:100%;
    border-radius: 20px;
 }
`
export const Liders = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SubLiderImg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.8);
  transform: translatey(1rem);
  img{
    width: 100%;
    height:100%;
    border-radius: 40px;
 }
`
export const LiderImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.8);
  img{
    width: 100%;
    height:100%;
    border-radius: 40px;
 }
`

export const Page = styled.div`
  display: flex;
  align-items:center;
  button {
    height: 40px;
    padding: 0 1rem;
    background: ${Props => Props.theme.colors.sec};
    font-size: 1rem;
    color: #fff;
    :nth-child(2){
      background: #fff;
      color: #000;
    }
    :hover {
      filter: brightness(1.3);
    }
  }
`
export const Aside = styled.aside`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  border-radius: 10px;
  gap: 1rem;
  button{
    width: 100%;
    height: 40px;
    color: #fff;
    font-size: 1.4rem;
    background: ${Props => Props.theme.colors.sec};
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    :hover {
      filter: brightness(1.3);
    }
  }
`
export const Filters = styled.div`
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items:center;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
`
export const FilterHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items:center;
  justify-content:center;
  background: #ccc;
  border-bottom: 1px solid ${Props => Props.theme.colors.pri};
  border-radius: 10px 10px 0 0;
`
export const FilterOptions = styled.div`
  width: 100%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  padding: .5rem;
  background: ${Props => Props.theme.colors.bac};
  border-radius:0 0 10px 10px;
  overflow-y: scroll;
  input {
    min-height: 40px;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    :focus {
      outline: none;
    }
  }
`
export const GroupType = styled.div`
h4 {
  margin: 1rem 0;
}
`
export const InputGroup = styled.div`


`
export const Flex = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items:center;
  gap: .5rem;
`