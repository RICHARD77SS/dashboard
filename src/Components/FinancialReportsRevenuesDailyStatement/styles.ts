import styled from 'styled-components';

export const BoxClassification = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content:center;
  flex-wrap: wrap;
  .a{
    background: #00BFFF;
  }
  .b{
    background: #32CD32;
  }
  .c{
    background: #FF4500;
  }
  .d{
    background: #9400D3;
  }
`
export const BoxColor = styled.div`
  width: 40px;
  height: 10px;

`
export const ResumeBox = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid black;
`
export const ResumeFlex = styled.div`
  width: 100%;
  height: auto;
  display: flex;

`
export const ResumeBlock = styled.div`
  width: 50%;
  height: auto;

  display: flex;
  align-items:center;
  flex-direction: column;
`
export const ResumeContent = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid black;
  background: #f4f4f4;
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  pre {
    padding: 0 1rem;
  }
`