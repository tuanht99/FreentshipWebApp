import { View, Text } from "react-native";
import { Ionicons, MaterialIcons } from "react-native-vector-icons";

export default function UserAddress(props) {
  return (
    <View style={props.theme}>
      <Text style={{ color: '#aaa' }}>{props.titleAddress}</Text>
      <View style={props.theme1}>
        <Ionicons name="location" size={20} color="#E94730" style={{ marginHorizontal: 4 }} />
        <Text style={{ color: '#0e0e0e' }}>53 đường võ văn ngân, linh chiểu, thủ đức, t...</Text>
        <MaterialIcons name="navigate-next" size={20} color="#0e0e0e" />
      </View>
    </View>
  );
}
