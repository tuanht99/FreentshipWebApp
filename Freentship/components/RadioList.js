import { ScrollView } from 'react-native';
import RadioButton from './RadioButton';


export default function RadioList(props) {
  function handleCheck(value) {
    props.setChecked(value);
  }

  return (
    <ScrollView >
      {props.data.map(item => (
        <RadioButton
          key={item.value}
          value={item.value}
          label={item.label}
          checked={props.checked}
          handleCheck={handleCheck}
          icon={item.icon}
        />
      ))}
    </ScrollView >
  );
}
