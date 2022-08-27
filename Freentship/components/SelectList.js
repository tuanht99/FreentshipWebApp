import { useState } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function SelectList(props) {
  const [selectedValue, setSelectedValue] = useState(props.defaultValue);
  return (
    <View>
      <Picker mode={'dialog'} selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        {props.data.map((item, index) => {
          return (
            <Picker.Item key={index} label={item.label} value={item.value} />
          );
        }
        )}
      </Picker>
    </View>
  );
}
