import { View, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function IconText(props) {
  return (
    <View style={props.stylePartner}>
      {props.iconFeather && <Feather name={props.iconFeather} size={20} color="#0e0e0e" />}
      {props.iconMaterialCommunity && <MaterialCommunityIcons name={props.iconMaterialCommunity} size={20} color="#0e0e0e" />}
      <Text style={props.styleText}>{props.text}</Text>
    </View>
  )
}
