import { useEffect, useState } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RadioList from './RadioList';

export default function SelectList(props) {
  const txtTitle = 'Sắp xếp kết quả';
  const txtButton = 'Hoàn tất';
  const [modalVisible, setModalVisible] = useState(false);
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const data = [
    {
      value: 'first',
      label: 'Tất cả',
      icon: 'ios-locate'
    },
    {
      value: 'second',
      label: 'Giảm giá',
      icon: 'ios-checkmark-circle-outline'
    },
  ];
  const [checked, setChecked] = useState(props.category[0]);
  const [selectedValue, setSelectedValue] = useState(checked);
  const selectIcon = { position: 'absolute', top: -10, right: -10 };
  const unselected = { flexDirection: 'row', alignItems: 'center' };
  const selected1 = { fontSize: 16, color: '#e94730', paddingEnd: 6, padding: 8, borderWidth: 1, borderRadius: 5, borderColor: '#e94730' };
  const unselected1 = { fontSize: 16, color: '#0e0e0e', paddingEnd: 6, padding: 8, borderWidth: 1, borderRadius: 5, borderColor: '#0e0e0e' };

  useEffect(() => {
    props.category[0] = checked;
    console.log('category: ', props.category);
  }, [checked]);

  function handleModal() {
    setChecked(selectedValue);
    setModalVisible(!modalVisible);
  }
  function submit() {
    setModalVisible(!modalVisible);
    setSelectedValue(checked);
  }
  function handleIsSelected1() {
    setIsSelected1(!isSelected1);
    if (isSelected1) {
      props.category[1] = null;
    } else {
      props.category[1] = 'status';
    }
  }
  function handleIsSelected2() {
    setIsSelected2(!isSelected2);
    if (isSelected2) {
      props.category[2] = null;
    } else {
      props.category[2] = 'partner';
    }
  }

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 14, position: 'relative' }}>
        <Pressable style={{ padding: 8, borderWidth: 1, borderColor: '#e94730', borderRadius: 5, flexDirection: 'row', alignItems: 'center' }} onPress={handleModal}>
          <Text style={{ fontSize: 16, color: '#e94730', marginEnd: 4 }}>{data.find(item => item.value === selectedValue).label}</Text>
          <Ionicons name='chevron-down' size={20} color='#e94730' />
        </Pressable>
        <Pressable style={unselected} onPress={handleIsSelected1}>
          <Text style={isSelected1 ? selected1 : unselected1}>Đóng mở cửa</Text>
          {isSelected1 && <Ionicons style={selectIcon} name='close-circle' size={20} color='#0e0e0e' />}
        </Pressable>
        <Pressable style={unselected} onPress={handleIsSelected2}>
          <Text style={isSelected2 ? selected1 : unselected1}>Đối tác Free</Text>
          {isSelected2 && <Ionicons style={selectIcon} name='close-circle' size={20} color='#0e0e0e' />}
        </Pressable>
      </View>
      <Modal visible={modalVisible} animationType='fade' transparent={true} >
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ flex: 0.7, justifyContent: 'flex-end', backgroundColor: 'black', opacity: 0.6, width: '100%' }}>
            <View style={{ backgroundColor: 'black', width: '100%', height: 10, transform: [{ translateY: 10 }] }}></View>
          </Pressable>
          <View style={{ flex: 0.3, backgroundColor: '#cecece', width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
            <View style={{ flex: 0.2, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fefefe', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
              <Pressable style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center', height: '100%' }} onPress={() => setModalVisible(!modalVisible)}>
                <Ionicons name='ios-close' size={25} color='#000' />
              </Pressable>
              <View style={{ flex: 0.9, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', transform: [{ translateX: -20 }] }}>{txtTitle}</Text>
              </View>
            </View>
            <View style={{ flex: 0.5, marginVertical: 8, backgroundColor: '#fefefe' }}>
              <View>
                <RadioList data={data} checked={checked} setChecked={setChecked} />
              </View>
            </View>
            <View style={{ flex: 0.3, backgroundColor: '#fefefe' }}>
              <View style={{
                flex: 0.2, width: '100%', borderBottomWidth: 2, borderColor: '#cecece'
              }}></View>
              < Pressable onPress={submit} style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', marginHorizontal: 28, marginVertical: 14, borderRadius: 8 }}>
                <Text style={{ color: '#fef', fontSize: 16 }}>{txtButton}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal >
    </View >
  );
}
