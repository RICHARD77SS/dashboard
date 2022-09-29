import styled from 'styled-components'

export const Flex1 = styled.div`
  width: 100%;
  max-width: 1300px;
  height: auto;
  display: flex;
  align-items:flex-start;
`
export const Notes = styled.div`
  width: 30%;
  height: 200px;
  background: #777;
  border-radius: 10px;
`
export const TopNotes = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items:Center;
  justify-content: center;
  gap: .5rem;
  padding: 1rem;
  background: #555;
  border-radius: 10px 10px 0 0;
  button {
    font-size: 1.2rem;
    color: #fff;
  }
`
export const NotesContent = styled.div`
  width: 70%;
  background: #fff;
`