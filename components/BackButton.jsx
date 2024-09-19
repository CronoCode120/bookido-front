import { useNavigation } from 'expo-router'
import { BackIcon } from './icons'
import styled from 'styled-components/native'

const BackButton = ({ style }) => {
  const { goBack } = useNavigation()
  return (
    <BackBtn style={style} onPress={goBack} aria-label='Volver'>
      <BackIcon />
    </BackBtn>
  )
}

export default BackButton

const BackBtn = styled.Pressable`
  padding: 6px;
  border-radius: 99px;
`
