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
  return (
    <Wrapper>
      <BookInfo title={title} author={author} publisher={publisher} />
      <SynopsisWrapper>
        <SynopsisTitle>Sinopsis</SynopsisTitle>
        <SynopsisContainer>
          <Synopsis numberOfLines={6}>{synopsis}</Synopsis>
        </SynopsisContainer>
      </SynopsisWrapper>
    </Wrapper>
  )
}

export default DetailView
