import { Text, View } from 'react-native'
import { useState } from 'react'
import MoreButton from './MoreButton.jsx'
import {
  Synopsis,
  SynopsisContainer,
  SynopsisTitle,
  Wrapper
} from './styles/DetailView.js'

const DetailView = ({ synopsis, tags }) => {
  const [lines, setLines] = useState(12)
  const LINE_HEIGHT = 20

  const calcLines = e => {
    const { height } = e.nativeEvent.layout
    const lines = Math.round(height / LINE_HEIGHT)
    setLines(lines)
  }

  return (
    <>
      <Wrapper>
        <SynopsisTitle>Sinopsis</SynopsisTitle>
        <SynopsisContainer onLayout={calcLines}>
          <Synopsis numberOfLines={lines}>{synopsis}</Synopsis>
        </SynopsisContainer>
        <MoreButton />
      </Wrapper>
      <View>
        <Text>Tags</Text>
      </View>
    </>
  )
}

export default DetailView
