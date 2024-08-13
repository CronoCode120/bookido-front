import { Container, Indicator } from '../styles/BookViews.js'

const BookViews = ({ pageNum }) => {
  const pageQuant = 3
  const pages = new Array(pageQuant).fill()

  return (
    <Container>
      {pages.map((_pg, idx) => (
        <Indicator active={idx === pageNum} key={idx} />
      ))}
    </Container>
  )
}

export default BookViews
