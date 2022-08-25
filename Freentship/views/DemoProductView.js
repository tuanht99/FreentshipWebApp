import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const DemoProduct = () => {
    const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>This is Product Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')}>
            <Text>Product</Text>
        </TouchableOpacity>
    </View>
  )
}

export default DemoProduct