import * as React from 'react';
import { View, Text, Button, Image, ScrollView, SafeAreaView, ImageBackground,TouchableOpacity } from 'react-native';
import AppStyle from '../theme';
import Longxaodua from '../assets/longxaodua.jpg';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function ComingSoon({ navigation }) {
    return (
        <SafeAreaView style={AppStyle.StyleStore.container}>
            <ScrollView>

                <ImageBackground style={AppStyle.StyleStore.imgFood} source={Longxaodua}>
                    <TouchableOpacity style={[AppStyle.StyleStore.iconCicle, AppStyle.StyleStore.rightIcon]} onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={21} color="#fff"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[AppStyle.StyleStore.iconCicle, AppStyle.StyleStore.heartIcon]}>
                        <AntDesign name="heart" size={21} color="red"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[AppStyle.StyleStore.iconCicle, AppStyle.StyleStore.srearchIcon]}>
                        <FontAwesome5 name="search" size={21} color="#fff"/>
                    </TouchableOpacity>
                </ImageBackground>

                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>
                        Nguyễn Văn Mười
                    </Text>
                </View>
                <View style={{ flex: 1 }}>

                </View>
            </ScrollView>

        </SafeAreaView>
    );
}