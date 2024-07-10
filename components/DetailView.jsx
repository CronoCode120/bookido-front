import { Text, View } from 'react-native'

const DetailView = ({ synopsis, tags }) => {
  return (
    <>
      <View>
        <Text>Sinopsis</Text>
        <Text>{synopsis}</Text>
      </View>
      <View>
        <Text>Tags</Text>
      </View>
    </>
  )
}

export default DetailView
