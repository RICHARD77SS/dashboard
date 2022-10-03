import styled from 'styled-components';
interface Props {
  height?: string;
}
export const TextAreaSt = styled.div<Props>`
  width: 100%;
  height: auto;
  padding: 1rem;
  .ql-container {
    min-height: ${Props => Props.height};
  }
  .ql-editor {
    min-height: ${Props => Props.height};
  }
`