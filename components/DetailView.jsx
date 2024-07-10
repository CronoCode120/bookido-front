import { Text, View } from 'react-native'
import { SynopsisTitle, Wrapper } from './styles/DetailView.js'

const DetailView = ({ synopsis, tags }) => {
  return (
    <>
      <Wrapper>
        <SynopsisTitle>Sinopsis</SynopsisTitle>
        <Text>{synopsis}</Text>
      </Wrapper>
      <View>
        <Text>Tags</Text>
      </View>
    </>
  )
}

export default DetailView
