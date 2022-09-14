import { Text, Pressable, View } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function RadioButton(props) {
  return (
    <Pressable onPress={props.handleCheck.bind(this, props.value)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 2, borderBottomColor: '#cecece', paddingHorizontal: 12 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicon name={props.icon} size={25} color='#0e0e0e' />
        <Text style={{ fontSize: 16, marginStart: 8 }}>{props.label}</Text>
      </View>
      <Ionicon style={{ paddingVertical: 14 }} name={props.checked === props.value ? 'ios-radio-button-on' : 'ios-radio-button-off'} size={25} color={props.checked === props.value ? '#e94730' : '#0e0e0e'} />
    </Pressable>
  );
}
