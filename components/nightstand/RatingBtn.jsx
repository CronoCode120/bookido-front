import { RateBtn, RateText } from './styles/Review.js'

const RatingBtn = ({ label, value, selectedValue, onPress, Icon }) => {
  return (
    <RateBtn onPress={() => onPress(value)}>
      <Icon selected={selectedValue === value} />
      <RateText>{label}</RateText>
    </RateBtn>
  )
}

export default RatingBtn
