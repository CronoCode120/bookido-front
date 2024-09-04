import styled from 'styled-components/native'

const Button = styled.Pressable`
  padding: 10px;
  border-radius: 8px;
`

export const StyledButton = styled(Button)(({ type }) => {
  if (type === 'tertiary')
    return {
      border: '0.8px solid #64748B'
    }

  return {
    backgroundColor: '#334155'
  }
})

export const Label = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ type }) => (type === 'tertiary' ? '#64748B' : '#fffafa')};
`
