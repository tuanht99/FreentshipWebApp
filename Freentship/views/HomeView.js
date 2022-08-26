import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { MaterialIcons, Ionicons } from "react-native-vector-icons";
import TextImage from "../components/TextImage";
import Products from "../components/Products";

const data1 = [
  {
    nameImage: "https://cdn.tgdd.vn/2022/01/CookDish/cach-lam-com-ga-chien-xoi-mo-ngon-da-vang-gion-rum-dom-gian-avt-1200x676.jpg",
    text: "Cơm gà 1",
    numberAddress: "1.5",
    discount: "10",
    id: 1,
  },
  {
    nameImage: "https://cdn.tgdd.vn/2022/01/CookDish/cach-lam-com-ga-chien-xoi-mo-ngon-da-vang-gion-rum-dom-gian-avt-1200x676.jpg",
    text: "Cơm gà 2",
    numberAddress: "1.5",
    discount: "10",
    id: 2,
  },
  {
    nameImage: "https://cdn.tgdd.vn/2022/01/CookDish/cach-lam-com-ga-chien-xoi-mo-ngon-da-vang-gion-rum-dom-gian-avt-1200x676.jpg",
    text: "Cơm gà 3",
    numberAddress: "1.5",
    discount: "10",
    id: 3,
  },
  {
    nameImage: "https://cdn.tgdd.vn/2022/01/CookDish/cach-lam-com-ga-chien-xoi-mo-ngon-da-vang-gion-rum-dom-gian-avt-1200x676.jpg",
    text: "Cơm gà 4",
    numberAddress: "1.5",
    discount: "10",
    id: 4,
  },
  {
    nameImage: "https://cdn.tgdd.vn/2022/01/CookDish/cach-lam-com-ga-chien-xoi-mo-ngon-da-vang-gion-rum-dom-gian-avt-1200x676.jpg",
    text: "Cơm gà 5",
    numberAddress: "1.5",
    discount: "10",
    id: 5,
  },
];
const data2 = [
  {
    nameImage: "https://cdn.tgdd.vn/2022/01/CookDish/cach-lam-com-ga-chien-xoi-mo-ngon-da-vang-gion-rum-dom-gian-avt-1200x676.jpg",
    text: "Cơm gà 1",
    numberAddress: "1.5",
    discount: "10",
    id: 1,
  },
  {
    nameImage: "https://cdn.tgdd.vn/2022/01/CookDish/cach-lam-com-ga-chien-xoi-mo-ngon-da-vang-gion-rum-dom-gian-avt-1200x676.jpg",
    text: "Cơm gà 2",
    numberAddress: "1.5",
    discount: "10",
    id: 2,
  },
  {
    nameImage: "https://cdn.tgdd.vn/2022/01/CookDish/cach-lam-com-ga-chien-xoi-mo-ngon-da-vang-gion-rum-dom-gian-avt-1200x676.jpg",
    text: "Cơm gà 3",
    numberAddress: "1.5",
    discount: "10",
    id: 3,
  },
  {
    nameImage: "https://cdn.tgdd.vn/2022/01/CookDish/cach-lam-com-ga-chien-xoi-mo-ngon-da-vang-gion-rum-dom-gian-avt-1200x676.jpg",
    text: "Cơm gà 4",
    numberAddress: "1.5",
    discount: "10",
    id: 4,
  },
  {
    nameImage: "https://cdn.tgdd.vn/2022/01/CookDish/cach-lam-com-ga-chien-xoi-mo-ngon-da-vang-gion-rum-dom-gian-avt-1200x676.jpg",
    text: "Cơm gà 5",
    numberAddress: "1.5",
    discount: "10",
    id: 5,
  },
];
const data3 = [
  {
    nameImage: "https://cdn.tgdd.vn/2022/01/CookDish/cach-lam-com-ga-chien-xoi-mo-ngon-da-vang-gion-rum-dom-gian-avt-1200x676.jpg",
    text: "Cơm gà 1",
    numberAddress: "1.5",
    discount: "10",
    id: 1,
  },
  {
    nameImage: "https://cdn.tgdd.vn/2022/01/CookDish/cach-lam-com-ga-chien-xoi-mo-ngon-da-vang-gion-rum-dom-gian-avt-1200x676.jpg",
    text: "Cơm gà 2",
    numberAddress: "1.5",
    discount: "10",
    id: 2,
  },
  {
    nameImage: "https://cdn.tgdd.vn/2022/01/CookDish/cach-lam-com-ga-chien-xoi-mo-ngon-da-vang-gion-rum-dom-gian-avt-1200x676.jpg",
    text: "Cơm gà 3",
    numberAddress: "1.5",
    discount: "10",
    id: 3,
  },
  {
    nameImage: "https://cdn.tgdd.vn/2022/01/CookDish/cach-lam-com-ga-chien-xoi-mo-ngon-da-vang-gion-rum-dom-gian-avt-1200x676.jpg",
    text: "Cơm gà 4",
    numberAddress: "1.5",
    discount: "10",
    id: 4,
  },
  {
    nameImage: "https://cdn.tgdd.vn/2022/01/CookDish/cach-lam-com-ga-chien-xoi-mo-ngon-da-vang-gion-rum-dom-gian-avt-1200x676.jpg",
    text: "Cơm gà 5",
    numberAddress: "1.5",
    discount: "10",
    id: 5,
  },
];

export default function HomeView({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ backgroundColor: "#ddd" }}>
      <View style={{ height: 130 }}>
        <ImageBackground
          source={require("../assets/backgroundHome.png")}
          style={{ height: 130 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 24,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 8,
                backgroundColor: "#767676",
                opacity: 0.8,
                borderRadius: 25,
              }}
            >
              <Ionicons
                name="location"
                size={24}
                color="#E94730"
                style={{ marginEnd: 4 }}
              />
              <Text style={{ marginTop: 4, color: "#eee" }}>
                53 đường võ văn ngân, linh chiểu, thủ đức, t...
              </Text>
              <MaterialIcons name="navigate-next" size={30} color="#FEFEFE" />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          height: 325,
          backgroundColor: "#eee",
          paddingHorizontal: 14,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 18,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fefefe",
              paddingVertical: 5,
              paddingLeft: 3,
              paddingRight: 43,
              borderRadius: 30,
            }}
          >
            <Image
              source={require("../assets/avatar.jpg")}
              style={{
                height: 40,
                width: 40,
                borderRadius: 25,
                borderWidth: 1,
                borderColor: "#ccc",
              }}
            />
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginTop: 6,
                marginStart: 8,
              }}
            >
              Chào buổi tối, Khanh
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text="Giao đồ ăn"
            />
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text="Gọi xe"
            />
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text="Đi chợ"
            />
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text="Giao hàng"
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 12 }}>
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text="Siêu thị LoX"
            />
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text="Mua mỹ phẩm"
            />
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text="Giặt ủi"
            />
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text="Mua thuốc"
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 12 }}>
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text="Shopping"
            />
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text="Chăm thú cưng"
            />
            <TextImage
              navigation={navigation}
              nameImage="food.png"
              text="Giao hoa"
            />
            <TextImage navigation={navigation} nameImage="" text="" />
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 24 }}>
        <Products title="thử quán mới" data={data1} />
        <Products title="đang khuyến mãi" data={data2} />
        <Products title="thương hiệu quen thuộc" data={data3} />
      </View>
    </ScrollView>
  );
}
