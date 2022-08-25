import { View, Text, Pressable, ScrollView, Image } from 'react-native';
import Product from './Product';

function Category1(props) {
  const styles = {
    data1: { marginStart: 14 },
    data2: { height: 140, width: 133 },
    data3: { textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginTop: 8 },
  };

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
      <ScrollView horizontal={true} contentContainerStyle={{ marginTop: 25, marginStart: -14 }}>
        {props.data.map((item, index) => (
          <Product key={index} nameImage={item.nameImage} text={item.text} style={styles} />
        ))}
        <View style={styles.data1}>
          <View style={{ width: 133, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#E94730", textAlign: 'center' }}>xem tất cả Thử quán mới tại LOSHIP</Text>
            <Image source={require('../assets/next.png')} style={{ height: 20, width: 20 }} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Category1;
