import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import Longxaodua from '../assets/longxaodua.jpg';
import { Dimensions } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

const windowWidth = Dimensions.get("window").width;


export default function FavoriteStore ({navigation}) {
  return (
    <View style={styles.container}>
        <ScrollView style={styles.scollview}>

            <View style={{ flex: 1 }}>
              
              <View style={styles.htrOrder}>
                <Image style={{
                  height: 80, width: 70,
                  resizeMode: "contain",
                  
                  flex: 2, justifyContent: 'center', alignItems: 'center'
                }} source={Longxaodua} />

                <View style={{ flexDirection: 'column', flex: 4 }}>
                  <Text style={[styles.bold,styles.textSize17]}>
                    Lòng xào dưa
                  </Text>

                  <Text style={{}}>
                  <Octicons name="location" style={styles.icon}/>
                    0.3 km 
                  </Text>

                  <Text style={{}}>
                    <Ionicons name="star-outline" style={styles.icon}/>
                        Đối tác loShip
                  </Text>
                  <Text style={styles.orderStatusTrue}>
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    mr10: {
      marginBottom: 8,
      marginTop: 8,
    },
    bold: { fontWeight: 'bold', fontSize: 14 },
    textSize17:{  fontSize: 16},
    italic: { fontStyle: 'italic' },
    textGif: { fontSize: 13, color: '#AAAAAA' },
    textVersion: { fontSize: 15, color: '#999999' },
    icon: {
      fontSize: 15,
      marginRight: 20,
      fontWeight: 'bold',
      color: "black",
    }
    ,
    htrOrderText: {
      fontSize: 18,
      fontWeight: '900',
      marginLeft: 20,
      marginBottom: 10,
    },
    htrOrder:{
      flexDirection: 'row',
      marginBottom: 10,
      marginTop: 10,
    },
    orderStatusTrue:{
      color:'#00FF00',
      fontWeight:'700',
    },
    orderStatusFalse:{
      color:'#999999',
      fontWeight:'700',
    }
  });