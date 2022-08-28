import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button, flex, } from 'react-native'
import React from 'react'
// list dữ liệu
import Avatar from '../assets/gaubeo.jpg';
// list
const PROFICLE = [{
  key: 1,
  name: 'Nguyễn Văn 10',
  phone: '0966.533.699',
  image: Avatar,

}]

export default function InforSettingView() {
  return (

    <View style={styles.container}>
      {/* navigators  */}
      <View style={styles.navigators}>
        <TouchableOpacity>
          <Image style={styles.Image} source={require('../assets/arrow-left.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.navigatorsText}>
          Quản Lí Hồ Sơ
        </Text>
      </View>
      {/* avatars */}
      <View style={styles.avatar}>
        <TouchableOpacity>
          {PROFICLE.map((user) => (
            <View style={""}>
              <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={styles.avatarchange} source={user.image} />
              </View>

              <View style={{ flexDirection: 'column', flex: 4 }}>
                <Text style={{ fontSize: 20, color: 'black' }}>
                  {user.name}
                </Text>
                <Text style={{ color: '#FF00FF', fontSize: 15 }}>
                  {user.phone}
                </Text>
                <TouchableOpacity style={{}}>
                  <Text style={{
                    fontSize: 18, fontStyle: 'italic', textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 20,
                  }}>Cập nhật hồ sơ</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </TouchableOpacity>
      </View>
      {/* Profile */}
      <View style={styles.Profile}>
        {/* nút thay đổi */}
        <View style={{ flexDirection: 'row', }} >

          <Text style={styles.profileText}>
            Thông tin cá nhân
          </Text>
          <TouchableOpacity style={styles.touchableOpacityProfile}>
            <Text style={styles.textProfile}>thay đổi</Text>
          </TouchableOpacity>
        </View>
        <View >
          <View style={{ flexDirection: 'row', }} >
            <Image style={styles.Image} source={require('../assets/usericon.jpg')}></Image>
            <Text style={styles.profileText} >thanh trần nhật</Text>
          </View>
          <View style={{ flexDirection: 'row', }} >
            <Image style={styles.Image} source={require('../assets/mailicon.png')}></Image>
            <Text style={styles.profileText}>thanh126126@gmail.com</Text>
          </View>
          <View style={{ flexDirection: 'row', }} >
            <Image style={styles.Image} source={require('../assets/calendaricon.jpg')}></Image>
            <Text style={styles.profileText}>08/03/2002</Text>
          </View>


        </View>




      </View>
      {/* phone */}
      <View style={styles.Phone}>
        <View style={{ flexDirection: 'row', }} >

          <Text style={styles.PhoneText}>
              Số điện thoại liên lạc
          </Text>
          <TouchableOpacity style={styles.touchableOpacityProfile}>
            <Text style={styles.textPhone}>thay đổi</Text>
          </TouchableOpacity>
        </View>
        <View>
        <View style={{ flexDirection: 'row',paddingTop:20 }} >
            <Image style={styles.Image} source={require('../assets/telephone.png')}></Image>
            <Text style={styles.profileText} >0123456789</Text>
          </View>
        </View>
      </View>
      {/* change password */}
      <View style={styles.ChangePassword}>
        <View style={{ flexDirection: 'row', }} >
          <Image style={styles.Image} source={require('../assets/padlock.png')}></Image>

          <Text style={styles.profileText}>
            đổi mật khẩu
          </Text>
          <TouchableOpacity style={styles.touchableOpacityChangePassword}>
            <Image style={styles.Image} source={require('../assets/right-arrow.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: "#DCDCDC",
    width: '100%',
    height: '100%',
  },
  title: {
    color: 'red',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigators: {
    margin: 5,
    flex: 1,
    display: 'flex',
    paddingTop: 10,
    flexDirection: 'row',
    paddingTop: 30,
    backgroundColor: "white",

  },
  avatar: {
    margin: 5,
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: "white",

  },
  Profile: {
    margin: 5,
    flex: 3,
    display: 'flex',

    backgroundColor: 'white',
    flexDirection: 'column',
  },

  ChangePassword: {
    margin: 5,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  navigatorsText: {
    paddingLeft: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,

  },
  Image: {
    paddingTop: 50,
    width: 50,
    height: 50,
  },
  avatarchange: {
    height: 80, width: 80,
    resizeMode: "contain",
    borderRadius: 50,
  },
  profileText: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
  },
  
  textProfile: {
    marginLeft: 130,
    fontSize: 20,
    color: 'blue',
  },
  touchableOpacityChangePassword: {
    paddingLeft: 150,
  },
  Phone: {
    flex: 2,
    margin: 5,
    backgroundColor: 'white',
  },
  PhoneText: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
    color: 'black',
  },
  textPhone: {
    marginLeft: 110,
    fontSize: 20,
    color: 'blue',
  },
});
