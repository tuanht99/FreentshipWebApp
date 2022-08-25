import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

function Product(props) {
  return (
    <View style={props.style.data1}>
      <Image source={{ url: props.nameImage }}
        style={props.style.data2} />
      <View style={{ paddingHorizontal: 4, paddingBottom: 8 }}>
        <Text style={props.style.data3}>{props.text}</Text>
        {props.numberAddress && <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../assets/qc.png')} style={{ height: 20, width: 20 }} />
          <Ionicon name="location" size={20} color="#E94730" style={{ marginHorizontal: 4 }} />
          <Text>{props.numberAddress} Km</Text>
        </View>}
        {props.discount && <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../assets/discount.png')} style={{ height: 20, width: 20, marginRight: 4 }} />
          <Text>Giảm {props.discount}%</Text>
        </View>}
        {props.isButton && <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: '#d9d9d9', paddingVertical: 4, marginHorizontal: 12, marginVertical: 4 }}>
          <Text>Chọn mua</Text>
        </TouchableOpacity>}
      </View>
    </View>
  );
}

export default Product;
