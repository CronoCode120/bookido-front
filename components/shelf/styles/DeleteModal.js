import styled from 'styled-components/native'

export const Wrapper = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #1f1f1f80;
`

export const Container = styled.View`
  width: 80%;
  max-width: 300px;
  height: 220px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 40px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.ROSE_50};
`

export const Message = styled.Text`
  text-align: center;
  font-size: 16px;
`
