import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.HEADING};
  text-align: center;
  margin-bottom: 30px;
`
export const SearchInput = styled.TextInput.attrs(({ theme }) => ({
  placeholder: 'Buscar',
  placeholderTextColor: theme.colors.NEUTRAL_500
}))`
  height: 40px;
  width: 86%;
  padding: 0 24px;
  color: ${({ theme }) => theme.colors.NEUTRAL_500};
  border: 1px solid ${({ theme }) => theme.colors.NEUTRAL_300};
  border-radius: 30px;
`
