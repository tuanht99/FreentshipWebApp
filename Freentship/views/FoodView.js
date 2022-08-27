import {
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "react-native-vector-icons";
import Products from "../components/Products";
import Category1 from "../components/Category1";
import { DataFood } from "../core/data";
import FoodTheme from "../themes/FoodTheme";
import Search from "../components/Search";
import UserAddress from "../components/UserAddress";

const txtSearch = 'Bạn thêm món gì?';
const txtTitleAddress = 'Giao tới địa chỉ';
const txtCategory1 = 'chọn theo thể loại';
const txtCategory2 = 'khám phá món mới';
const txtCategory3 = 'cửa hàng gần bạn';

function FoodScreen({ navigation, route }) {
  return (
    <ScrollView style={FoodTheme.container}>
      <View style={{ paddingHorizontal: 14, backgroundColor: '#fefefe' }}>
        <TouchableOpacity style={FoodTheme.food1} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#0e0e0e" style={{ padding: 14 }} />
        </TouchableOpacity>
        <Search textSearch={txtSearch} foodTheme={FoodTheme.food2} />
      </View>
      <UserAddress theme={FoodTheme.food3} theme1={FoodTheme.food4} titleAddress={txtTitleAddress} />
      <View style={{ marginTop: 14, marginBottom: 24 }}>
        <Category1 title={txtCategory1} data={DataFood.data4} />
        <Products title={txtCategory2} data={DataFood.data5} />
        <Products title={txtCategory3} data={DataFood.data1} />
      </View>
    </ScrollView>
  );
}

export default FoodScreen;
