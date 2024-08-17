import { Modal, Text, Pressable } from 'react-native'
import {
  Container,
  BlurWrapper,
  ContentWrapper,
  Title,
  Cover,
  Author,
  InfoWrapper,
  DetailWrapper,
  DetailText,
  DetailTitle,
  Heading
} from './styles/AddDrawer.js'
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { useEffect, useState } from 'react'
import { getFullAuthors } from '../../utils/getAuthors.js'

const AddDrawer = ({ book, visible, toggleDrawer }) => {
  const blurIntensity = useSharedValue(0)
  const [zIndex, setZIndex] = useState(-1)
  const DURATION = 150

  useEffect(() => {
    blurIntensity.value = withTiming(visible ? 40 : 0, {
      duration: DURATION
    })
    if (visible) setZIndex(1)
    if (!visible) setTimeout(() => setZIndex(-1), DURATION)
  }, [visible])

  const animatedProps = useAnimatedProps(() => ({
    intensity: blurIntensity.value
  }))

  const AnimatedBlurView = Animated.createAnimatedComponent(BlurWrapper)

  return (
    <AnimatedBlurView
      visible={visible}
      animatedProps={animatedProps}
      style={{ zIndex }}
    >
      <Modal
        animationType='slide'
        visible={visible}
        onRequestClose={toggleDrawer}
        transparent
      >
        <Container>
          <ContentWrapper>
            <Cover src={book?.cover} />
            <InfoWrapper>
              <Heading>
                <Title>{book?.title}</Title>
                <Author>{book?.author && getFullAuthors(book.author)}</Author>
              </Heading>
              <DetailWrapper>
                <DetailText>
                  <DetailTitle>ISBN</DetailTitle> {book?.isbn[0]}
                </DetailText>
                <DetailText>
                  <DetailTitle>EDITORIAL</DetailTitle> {book?.publisher[0]}
                </DetailText>
              </DetailWrapper>
            </InfoWrapper>
          </ContentWrapper>
          <Pressable onPress={toggleDrawer} style={{ padding: 20 }}>
            <Text>XXXX</Text>
          </Pressable>
        </Container>
      </Modal>
    </AnimatedBlurView>
  )
}

export default AddDrawer
