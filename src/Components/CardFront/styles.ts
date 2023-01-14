import styled from 'styled-components';

interface Props {
  cardBg?: string;
  bgColor?: string;
  titleColor?: string;
  textColor?: string;
  spanColor?: string;
}

export const CardFronts = styled.div<Props>`
  width: 100%;
  height: 380px;
  background:  ${Props => Props.bgColor};
  border-radius: 10px;
  background-image: url(${Props => Props.cardBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  img{
    position:absolute;
    width: 100px;
    height: 100px;
    border: 1px dashed ${Props => Props.theme.colors.shadow};
    cursor:pointer !important; 
  }
  h2{
    position:absolute;
    width: fit-content;
    font-size: 2rem;
    color:${Props => Props.titleColor};
    border: 1px dashed ${Props => Props.theme.colors.shadow};
    cursor:pointer;
  }
  span{
    position:absolute;
    width: fit-content;
    color:${Props => Props.spanColor};
    border: 1px dashed ${Props => Props.theme.colors.shadow};
    cursor:pointer;
  }
  h3{
    position:absolute;
    width: fit-content;
    color:${Props => Props.titleColor};
    border: 1px dashed ${Props => Props.theme.colors.shadow};
    cursor:pointer;
  }
  h5{
    position:absolute;
    width: fit-content;
    color:${Props => Props.spanColor};
    border: 1px dashed ${Props => Props.theme.colors.shadow};
    cursor:pointer;
  } 
  p{
    position:absolute;
    width: fit-content;
    color:${Props => Props.textColor};
    border: 1px dashed ${Props => Props.theme.colors.shadow};
    cursor:pointer;
  }
`
export const Options = styled.div<Props>`
  width: 200px;
  max-width: 200px;
  height: 380px;
  background: #ddd;
  border-radius: 10px;
  overflow-y: scroll;
  padding: .5rem;
  img{
    width: 100%;
    height: 100px;
    border: 1px dashed ${Props => Props.theme.colors.shadow};
    cursor:pointer !important; 
  }
  h2{
    width: 100%;
    font-size: 2rem;
    color:${Props => Props.titleColor};
    border: 1px dashed ${Props => Props.theme.colors.shadow};
    cursor:pointer;
  }
  span{
    width: 100%;
    color:${Props => Props.spanColor};
    border: 1px dashed ${Props => Props.theme.colors.shadow};
    cursor:pointer;
  }
  h3{
    width: 100%;
    color:${Props => Props.titleColor};
    border: 1px dashed ${Props => Props.theme.colors.shadow};
    cursor:pointer;
  }
  h5{
    width: 100%;
    color:${Props => Props.spanColor};
    border: 1px dashed ${Props => Props.theme.colors.shadow};
    cursor:pointer;
  } 
  p{
    width: 100%;
    color:${Props => Props.textColor};
    border: 1px dashed ${Props => Props.theme.colors.shadow};
    cursor:pointer;
  }
`
export const Flex = styled.div`
  width: 100%;
  height: auto;
  display:flex;
`
export const ContentBox = styled.div`
  width: auto;
  height: auto;
  display:flex;
  flex-direction:column;
  position:absolute;
`