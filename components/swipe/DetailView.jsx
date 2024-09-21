import { Text, View } from 'react-native'
import { useState } from 'react'
import MoreButton from './MoreButton.jsx'
import BookInfo from './BookInfo.jsx'
import {
  Synopsis,
  SynopsisContainer,
  SynopsisTitle,
  SynopsisWrapper,
  Wrapper
} from './styles/DetailView.js'

const DetailView = ({ title, author, publisher, synopsis, tags }) => {
  const [lines, setLines] = useState(12)
  const LINE_HEIGHT = 20

  const calcLines = e => {
    const { height } = e.nativeEvent.layout
    const lines = Math.round(height / LINE_HEIGHT)
    setLines(lines)
  }

  return (
    <Wrapper>
      <BookInfo title={title} author={author} publisher={publisher} />
      <SynopsisWrapper>
        <SynopsisTitle>Sinopsis</SynopsisTitle>
        <SynopsisContainer onLayout={calcLines}>
          <Synopsis numberOfLines={lines}>{synopsis}</Synopsis>
        </SynopsisContainer>
      </SynopsisWrapper>
    </Wrapper>
  )
}

export default DetailView
