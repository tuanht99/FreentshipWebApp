import { View, Text, Image } from "react-native";
import Product1Theme from "../themes/Product1Theme";
import Distance from "./Distance";
import IconText from "./IconText";

export default function Product1(props) {
  return (
    <View style={Product1Theme.container}>
      <Image source={require("../assets/monAn1.png")} style={Product1Theme.image} />
      <View style={Product1Theme.contentRight}>
        <Text style={Product1Theme.title}>bánh mì nướng & xoay</Text>
        <Distance numberAddress={props.data.numberAddress} />
        <IconText iconFeather='star' text={props.data.text1} stylePartner={Product1Theme.partner} styleText={Product1Theme.text} />
        <IconText iconMaterialCommunity='map-marker-star-outline' text={props.data.text2} stylePartner={Product1Theme.partner} styleText={Product1Theme.text} />
      </View>
    </View>
  );
}
