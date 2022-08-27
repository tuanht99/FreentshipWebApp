import { View, Text, Image, TouchableOpacity } from 'react-native';
import ProductTheme from '../themes/ProductTheme';
import Distance from './Distance';

function Product(props) {
  return (
    <View style={props.style.data1}>
      <Image source={{ url: props.nameImage }}
        style={props.style.data2} />
      <View style={{ paddingHorizontal: 4, paddingBottom: 8 }}>
        <Text style={props.style.data3}>{props.text}</Text>
        <Distance numberAddress={props.numberAddress} />
        {props.discount && <View style={ProductTheme.product1}>
          <Image source={require('../assets/discount.png')} style={ProductTheme.product2} />
          <Text>Giảm {props.discount}%</Text>
        </View>}
        {props.isButton && <TouchableOpacity style={ProductTheme.product3}>
          <Text>Chọn mua</Text>
        </TouchableOpacity>}
      </View>
    </View>
  );
}

export default Product;
