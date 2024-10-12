import { Container, SlotNum, Wrapper } from './styles/BookSlot.js'

const BookSlot = ({ num }) => (
  <Wrapper>
    <Container>
      <SlotNum>{num}</SlotNum>
    </Container>
  </Wrapper>
)

export default BookSlot
