import { Dimensions } from 'react-native'

export const getDimensions = () => {
  const { width, height } = Dimensions.get('window')
  return { width, height }
}

export const getHeightPercent = percent =>
  (getDimensions().height / 100) * percent

export const getWidthPercent = percent =>
  (getDimensions().width / 100) * percent
