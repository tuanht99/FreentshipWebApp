import { View, TouchableOpacity, Text, Image } from "react-native";

function TextImage(props) {
  const screen = ["Food", "Grapber", "Market", "Delivery", "SuperMarket", "Cosmetics", "Laundry", "Medicine", "Shopping", "Pet", "Flower"];
  return (
    <View style={{ flex: 1 }}>
      {props.nameImage !== "" ? (
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() =>
            props.navigation.navigate(screen[0], { text: props.text })
          }
        >
          <Image
            source={require("../assets/food.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text style={{ textAlign: "center" }}>{props.text}</Text>
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
    </View>
  );
}

export default TextImage;
