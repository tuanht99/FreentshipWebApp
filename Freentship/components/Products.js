import { View, Text, Pressable, FlatList } from 'react-native';
import Product from './Product';

function Products(props) {
  const styles = {
    data1: { borderWidth: 1, borderColor: '#d9d9d9', borderRadius: 8, marginStart: 14 },
    data2: { height: 140, width: 133, borderTopLeftRadius: 8, borderTopRightRadius: 8 },
    data3: { fontSize: 18, fontWeight: 'bold', marginTop: 8 },
  };
  props.data.push({ nameImage: '', text: '', numberAddress: '', discount: '', id: 9 });
  return (
    <View style={{ height: 304, backgroundColor: '#fefefe', marginVertical: 12, paddingHorizontal: 14, paddingBottom: 14 }} >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 18 }}>
        <Text style={{ fontSize: 16, textTransform: 'uppercase', fontWeight: 'bold' }} >
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
            isButton={item.isButton}
            style={styles}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default Products;
