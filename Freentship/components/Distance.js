import { View, Image, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Distance(props) {
  return (
    <View>
      {props.numberAddress && <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../assets/qc.png')} style={{ height: 20, width: 20 }} />
        <Ionicons name="location" size={20} color="#E94730" style={{ marginHorizontal: 4 }} />
        <Text>{props.numberAddress} Km</Text>
      </View>}
    </View>
  )
}
