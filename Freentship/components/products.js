import { View, Text, Pressable, FlatList } from 'react-native';
import Product from './product';

function Products(props) {
  props.data.push({ nameImage: '', text: '', numberAddress: '', discount: '', id: 6 });

  return (
    <View style={{ height: 304, backgroundColor: '#eee', marginTop: 12, paddingHorizontal: 14 }} >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 18 }}>
        <Text style={{ fontSize: 16, textTransform: 'uppercase' }} >
          {props.title}
        </Text>
        <Pressable style={{ flexDirection: 'row' }} onPress={() => console.log('Xem tat ca: ', props.title)}>
          <Text style={{ color: '#00A3FF', fontSize: 14 }}>Xem tất cả</Text>
        </Pressable>
      </View>
      <FlatList
        horizontal={true}
        contentContainerStyle={{ marginTop: 25, marginStart: -14 }}
        data={props.data}
        renderItem={({ item }) => (
          <Product
            nameImage={item.nameImage}
            text={item.text}
            numberAddress={item.numberAddress}
            discount={item.discount}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default Products;
