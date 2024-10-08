import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import Button from '../../components/Button.jsx'

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 40px;
`

export const TopWrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 340px;
`

export const ProgressBar = styled.View`
  background: ${({ theme }) => theme.colors.NEUTRAL_200};
  align-self: stretch;
  height: 12px;
  border-radius: 6px;
  margin-bottom: 30px;
`

export const Progress = styled.View`
  width: ${({ steps, progress }) => (100 / steps) * progress}%;
  height: 100%;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.AMBER_600};
`

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.HEADING};
  text-align: center;
  margin-bottom: 30px;
`

export const SearchWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  height: 40px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.NEUTRAL_300};
  border-radius: 30px;
`

export const SearchInput = styled.TextInput.attrs(({ theme }) => ({
  placeholder: 'Buscar por título',
  placeholderTextColor: theme.colors.NEUTRAL_500,
  inputMode: 'search',
  autoCorrect: false,
  autoComplete: 'off'
}))`
  color: ${({ theme }) => theme.colors.NEUTRAL_500};
  flex: 1;
  height: 100%;
`

export const StyledButton = styled(Button)`
  width: 80%;
`

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.BLACK
}))``

export const DropdownList = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.NEUTRAL_400};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.NEUTRAL_400};
  max-height: 400px;
  align-self: stretch;
  overflow: hidden;
`

export const Separator = styled.View`
  align-self: stretch;
  height: 1px;
  background: ${({ theme }) => theme.colors.NEUTRAL_400};
`
