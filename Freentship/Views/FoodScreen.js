import {
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, Feather, Ionicons } from "react-native-vector-icons";
import Products from "../components/products";
import Category1 from "../components/Category1";

function FoodScreen({ navigation, route }) {
  const data1 = [
    {
      nameImage: "https://cdn.tgdd.vn/2022/01/CookDish/cach-lam-com-ga-chien-xoi-mo-ngon-da-vang-gion-rum-dom-gian-avt-1200x676.jpg",
      text: "Cơm gà 1",
      numberAddress: "1.5",
      discount: "10",
      id: 1,
    },
    {
      nameImage: "food.png",
      text: "Cơm gà 2",
      numberAddress: "1.5",
      discount: "10",
      id: 2,
    },
    {
      nameImage: "food.png",
      text: "Cơm gà 3",
      numberAddress: "1.5",
      discount: "10",
      id: 3,
    },
    {
      nameImage: "food.png",
      text: "Cơm gà 4",
      numberAddress: "1.5",
      discount: "10",
      id: 4,
    },
    {
      nameImage: "food.png",
      text: "Cơm gà 5",
      numberAddress: "1.5",
      discount: "10",
      id: 5,
    },
  ];

  const data4 = [
    {
      id: 1,
      nameImage: "https://cdn.tgdd.vn/2022/07/CookDish/cach-nau-che-hat-sen-long-nhan-thom-ngon-tot-cho-suc-khoe-avt-1200x676.jpg",
      text: "Chè hạt sen",
    },
    {
      id: 2,
      nameImage: "https://cdn.tgdd.vn/2022/07/CookDish/cach-nau-che-hat-sen-long-nhan-thom-ngon-tot-cho-suc-khoe-avt-1200x676.jpg",
      text: "Chè hạt sen",
    },
  ]
  const data5 = [
    {
      id: 1,
      nameImage: "https://cdn.tgdd.vn/2022/07/CookDish/cach-nau-che-hat-sen-long-nhan-thom-ngon-tot-cho-suc-khoe-avt-1200x676.jpg",
      text: "Chè hạt sen",
      numberAddress: "1.5",
      isButton: true,
    },
    {
      id: 2,
      nameImage: "https://cdn.tgdd.vn/2022/07/CookDish/cach-nau-che-hat-sen-long-nhan-thom-ngon-tot-cho-suc-khoe-avt-1200x676.jpg",
      text: "Chè hạt sen",
      numberAddress: "1.5",
      isButton: true,
    },
  ]
  return (
    <ScrollView style={{ paddingTop: 50, backgroundColor: '#d9d9d9' }}>
      <View style={{ paddingHorizontal: 14, backgroundColor: '#fefefe' }}>
        <TouchableOpacity style={{ width: 52, transform: [{ translateX: -14 }], backgroundColor: 'red' }}
          onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#0e0e0e" style={{ padding: 14 }} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginVertical: 14, alignItems: 'center', borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}>
          <Feather name="search" size={24} color="#0e0e0e" style={{ padding: 14 }} />
          <TextInput placeholder="Bạn thêm món gì?" style={{ flex: 1 }} />
        </View>
      </View>
      <View style={{ backgroundColor: '#fefefe', padding: 14, marginTop: 14 }}>
        <Text style={{ color: '#aaa' }}>Giao tới địa chỉ</Text>
        <View style={{ marginVertical: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Ionicons name="location" size={20} color="#E94730" style={{ marginHorizontal: 4 }} />
          <Text style={{ color: '#0e0e0e' }}>53 đường võ văn ngân, linh chiểu, thủ đức, t...</Text>
          <MaterialIcons name="navigate-next" size={20} color="#0e0e0e" />
        </View>
      </View>
      <View style={{ marginTop: 14, marginBottom: 24 }}>
        <Category1 title="chọn theo thể loại" data={data4} />
        <Products title="khám phá món mới" data={data5} />
        <Products title="cửa hàng gần bạn" data={data1} />
      </View>
    </ScrollView>
  );
}

export default FoodScreen;
