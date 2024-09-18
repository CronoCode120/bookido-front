import { BackIcon } from './icons'
import { useNavigation } from 'expo-router'
import styled from 'styled-components/native'

const NavHeader = ({ title }) => {
  const navigation = useNavigation()

  return (
    <Wrapper>
      <BackBtn onPress={navigation.goBack}>
        <BackIcon />
      </BackBtn>
      {title && <Title>{title}</Title>}
    </Wrapper>
  )
}

export default NavHeader

const Title = styled.Text`
  font-size: 22px;
  font-weight: 400;
`

const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 10px;
  padding: 4px 0;
`

const BackBtn = styled.Pressable`
  padding: 6px;
  border-radius: 99px;
`
