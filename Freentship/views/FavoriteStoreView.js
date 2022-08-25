import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import Longxaodua from '../assets/longxaodua.jpg';
import { Dimensions } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import AppStyle from '../themes/IndexTheme';

const windowWidth = Dimensions.get("window").width;


export default function FavoriteStore ({navigation}) {
  return (
    <View style={AppStyle.FavoriteStoreTheme.container}>
        <ScrollView style={AppStyle.FavoriteStoreTheme.scollview}>

            <View style={{ flex: 1 }}>
              
              <View style={AppStyle.FavoriteStoreTheme.htrOrder}>
                <Image style={{
                  height: 80, width: 70,
                  resizeMode: "contain",
                  
                  flex: 2, justifyContent: 'center', alignItems: 'center'
                }} source={Longxaodua} />

                <View style={{ flexDirection: 'column', flex: 4 }}>
                  <Text style={[AppStyle.FavoriteStoreTheme.bold,AppStyle.FavoriteStoreTheme.textSize17]}>
                    Lòng xào dưa
                  </Text>

                  <Text style={{}}>
                  <Octicons name="location" style={AppStyle.FavoriteStoreTheme.icon}/>
                    0.3 km 
                  </Text>

                  <Text style={{}}>
                    <Ionicons name="star-outline" style={AppStyle.FavoriteStoreTheme.icon}/>
                        Đối tác loShip
                  </Text>
                  <Text style={AppStyle.FavoriteStoreTheme.orderStatusTrue}>
                     Đang mở cửa
                  </Text>
                </View>
                <AntDesign name="delete" size={24} color="black" style={{marginRight: 10}}/>
              </View>

            </View>
          </ScrollView>
    </View>
  );
}
