import { Info, Title, Wrapper } from './styles/DropdownItem'

const DropdownItem = ({
  title,
  publisher = 'Sin información de la editorial'
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Info>{publisher}</Info>
    </Wrapper>
  )
}

export default DropdownItem
