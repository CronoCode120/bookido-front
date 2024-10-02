import { useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { useSwipe, useBooks } from '../../hooks'
import BookList from './BookList.jsx'
import Button, { LinkButton } from '../Button.jsx'

import { useSession } from '../../context/SessionProvider.js'
import { addToTable, discardBook } from '../../api/books.js'
import { Wrapper, BtnWrapper } from './styles/BookSwipe.js'

const BookSwipe = () => {
  const [curIdx, setCurIdx] = useState(0)
  const page = Math.floor((curIdx + 3) / 20) + 1

  const { books, saveForLater } = useBooks(page)
  const { session, setUpdateStand } = useSession()

  const [btnDisabled, setBtnDisabled] = useState(false)
  const curIsbn = books[curIdx]?.isbn[0]

  const toggleBtnCooldown = () => {
    setBtnDisabled(true)
    setTimeout(() => setBtnDisabled(false), 1500)
  }

  const handleSwipe = () => {
    setCurIdx(prevIdx => prevIdx + 1)
    toggleBtnCooldown()
  }

  const onSwipeLeft = () => {
    discardBook(curIsbn, session)
    handleSwipe()
  }

  const onSwipeRight = () => {
    addToTable(curIsbn, session).then(() => setUpdateStand(true))
    handleSwipe()
  }

  const onSwipeUp = () => {
    saveForLater(books[curIdx])
    handleSwipe()
  }

  const swipes = [
    useSwipe({
      onSwipeLeft,
      onSwipeRight,
      onSwipeUp
    }),
    useSwipe({
      onSwipeLeft,
      onSwipeRight,
      onSwipeUp
    }),
    useSwipe({
      onSwipeLeft,
      onSwipeRight,
      onSwipeUp
    })
  ]

  if (!books.length)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ActivityIndicator size='large' color='black' />
      </View>
    )

  return (
    <Wrapper>
      <BookList
        books={books}
        curIdx={curIdx}
        swipeInstances={swipes}
        btnDisabled={btnDisabled}
      />
      <BtnWrapper>
        <Button type='secondary' style={{ flex: 1 }}>
          Marcar como leído
        </Button>
        <LinkButton href={`/book/${curIsbn}`} style={{ flex: 1 }}>
          Ver libro
        </LinkButton>
      </BtnWrapper>
    </Wrapper>
  )
}

export default BookSwipe
