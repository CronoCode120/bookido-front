import { Dimensions } from 'react-native'

export const getDimensions = () => Dimensions.get('window')

export const getHeightPercent = percent =>
  (getDimensions().height / 100) * percent

export const getWidthPercent = percent =>
  (getDimensions().width / 100) * percent
