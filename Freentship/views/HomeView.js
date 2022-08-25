import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons, Feather, Ionicons } from "react-native-vector-icons";
import TextImage from "../components/TextImage";
import Products from "../components/Products";
import FoodScreen from "./FoodView";
import NotifyView from "./NotifyView";

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
const data2 = [
  {
    nameImage: "monAn1.png",
    text: "Cơm gà 1",
    numberAddress: "1.5",
    discount: "10",
    id: 1,
  },
  {
    nameImage: "monAn1.png",
    text: "Cơm gà 2",
    numberAddress: "1.5",
    discount: "10",
    id: 2,
  },
  {
    nameImage: "monAn1.png",
    text: "Cơm gà 3",
    numberAddress: "1.5",
    discount: "10",
    id: 3,
  },
  {
    nameImage: "monAn1.png",
    text: "Cơm gà 4",
    numberAddress: "1.5",
    discount: "10",
    id: 4,
  },
  {
    nameImage: "monAn1.png",
    text: "Cơm gà 5",
    numberAddress: "1.5",
    discount: "10",
    id: 5,
  },
];
const data3 = [
  {
    nameImage: "food.png",
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

function HomeScreen() {
  const HomeTab = createBottomTabNavigator();

 
  function ProfileScreen() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    );
  }

  function Home({ navigation }) {
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

  return (
    <HomeTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <HomeTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Notifications"
        component={NotifyView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="bell" color={color} size={size} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function HomeView() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Food" component={FoodScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDD",
  },
});
