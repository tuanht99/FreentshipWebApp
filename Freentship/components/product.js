import { View, Text, Image } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

function Product(props) {
  return (
    <View style={{ borderWidth: 1, borderColor: '#d9d9d9', borderRadius: 8, marginStart: 14 }}>
      {props.nameImage !== '' ? (
        <View>
          <Image source={require('../assets/' + props.nameImage)} style={{ height: 140, width: 133, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
          <View style={{ paddingHorizontal: 4, paddingBottom: 8 }}>
            <Text style={{ fontSize: 18, fontWeight: 700 }}>{props.text}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../assets/qc.png')} style={{ height: 20, width: 20 }} />
              <Ionicon name="location" size={20} color="#E94730" style={{ marginHorizontal: 4 }} />
              <Text>{props.numberAddress} Km</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../assets/discount.png')} style={{ height: 20, width: 20, marginRight: 4 }} />
              <Text>Giảm {props.discount}%</Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={{ width: 133, flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 400, color: "#E94730" }}>xem tất cả Thử quán mới tại LOSHIP</Text>
          <Image source={require('../assets/next.png')} style={{ height: 20, width: 20 }} />
        </View>
      )}
    </View>
  );
}

export default Product;
