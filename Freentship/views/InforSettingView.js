import { Text, View, Image, TouchableOpacity, Icon } from 'react-native'
import React from 'react'
// list dữ liệu
import Avatar from '../assets/gaubeo.jpg';
import { Ionicons } from '@expo/vector-icons';
// list
const PROFICLE = [{
  key: 1,
  name: 'Nguyễn Văn 10',
  phone: '0966.533.699',
  image: Avatar,

}]
import AppStyle from '../themes/InforUserSettingTheme'
export default function InforSettingView() {
  return (

    <View style={AppStyle.container}>
      {/* navigators  */}
      <View style={AppStyle.navigators}>
        <TouchableOpacity>
          <Image style={AppStyle.Image} source={require('../assets/arrow-left.png')}></Image>

        </TouchableOpacity>
        <Text style={AppStyle.navigatorsText}>
          Quản Lí Hồ Sơ
        </Text>
      </View>
      {/* avatars */}
      <View style={AppStyle.avatar}>
        <TouchableOpacity>
          {PROFICLE.map((user) => (
            <View style={""}>
              <View style={{ position:'relative' ,justifyContent: 'center', alignItems: 'center' }}>
                <Image style={AppStyle.avatarchange} source={user.image} />
                <Ionicons  style={{position:'absolute',left: 200, bottom:-15,}} name="md-camera-reverse-sharp" size={35} color="black" />

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
      <View style={AppStyle.Profile}>
        {/* nút thay đổi */}
        <View style={{ flexDirection: 'row', }} >

          <Text style={AppStyle.profileText}>
            Thông tin cá nhân
          </Text>
          <TouchableOpacity style={AppStyle.touchableOpacityProfile}>
            <Text style={AppStyle.textProfile}>thay đổi</Text>
          </TouchableOpacity>
        </View>
        <View >
          <View style={{ flexDirection: 'row', }} >
            <Image style={AppStyle.Image} source={require('../assets/usericon.jpg')}></Image>

            <Text style={AppStyle.profileText} >thanh trần nhật</Text>
          </View>
          <View style={{ flexDirection: 'row', }} >
            <Image style={AppStyle.Image} source={require('../assets/mailicon.png')}></Image>
            <Text style={AppStyle.profileText}>thanh126126@gmail.com</Text>
          </View>
          <View style={{ flexDirection: 'row', }} >
            <Image style={AppStyle.Image} source={require('../assets/calendaricon.jpg')}></Image>
            <Text style={AppStyle.profileText}>08/03/2002</Text>
          </View>


        </View>
      </View>
      {/* phone */}
      <View style={AppStyle.Phone}>
        <View style={{ flexDirection: 'row', }} >

          <Text style={AppStyle.PhoneText}>
            Số điện thoại liên lạc
          </Text>
          <TouchableOpacity style={AppStyle.touchableOpacityProfile}>
            <Text style={AppStyle.textPhone}>thay đổi</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={{ flexDirection: 'row', paddingTop: 20 }} >
            <Image style={AppStyle.Image} source={require('../assets/telephone.png')}></Image>
            <Text style={AppStyle.profileText} >0123456789</Text>
          </View>
        </View>
      </View>
      {/* change password */}
      <View style={AppStyle.ChangePassword}>
        <View style={{ flexDirection: 'row' }} >
          <Image style={AppStyle.Image} source={require('../assets/padlock.png')}></Image>

          <Text style={AppStyle.profileText}>
            đổi mật khẩu
          </Text>
          <TouchableOpacity style={AppStyle.touchableOpacityChangePassword}>
            <Image style={AppStyle.Image} source={require('../assets/right-arrow.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


