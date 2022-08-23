import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, Button, View } from 'react-native';
import themeRegister from '../theme/themeRegister';

export default function inputPhoneNumScreen() {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState(null);

    return (
        <View style={themeRegister.container}>
            <Text style={themeRegister.logo}>FREEN'T SHIP</Text>
            <Text style={themeRegister.txtWelcomeTag}>Chào mừng bạn đến với Freen'tship</Text>
            <Text style={themeRegister.txtInputPhoneNum}>Hãy nhập số điện thoại của bạn để tiếp tục</Text>
            <View style={themeRegister.input}>
                <TextInput
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                />
            </View>
            <Button
                style={themeRegister.btnLogin}
                title="Tiếp tục"
                color="#E94730"
                accessibilityLabel="Learn more about this purple button"
            />

        </View>
    );
}