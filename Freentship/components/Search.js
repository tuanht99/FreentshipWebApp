import { View, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function Search(props) {
  return (
    <View style={props.foodTheme}>
      <Feather name="search" size={24} color="#0e0e0e" style={{ padding: 14 }} />
      <TextInput placeholder={props.textSearch} style={{ flex: 1 }} />
    </View>
  )
}
