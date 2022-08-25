import { View, Text, Pressable, FlatList } from 'react-native';
import Product from '../components/product';

function Category1(props) {
  const styles = {
    data1: { marginStart: 14 },
    data2: { height: 140, width: 133 },
    data3: { textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginTop: 8 },
  };
  props.data.push({ nameImage: '', text: '', numberAddress: '', discount: '', id: 999 });

  return (
    <View style={{ height: 264, backgroundColor: '#fefefe', marginVertical: 12, paddingHorizontal: 14 }} >
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
            style={styles}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default Category1;
