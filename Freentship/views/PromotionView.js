import { ScrollView, View, TouchableOpacity } from 'react-native';
import TryNewShopTheme from '../themes/TryNewShopTheme';
import Feather from 'react-native-vector-icons/Feather';
import Search from '../components/Search';
import UserAddress from '../components/UserAddress';
import { DataTryNewShop } from '../core/data';
import Product1 from '../components/Product1';
import SelectList from '../components/SelectList';
import { DataPromotion } from '../core/data';


export default function TryNewShopView(props) {
  const txtSearch = 'Bạn thêm món gì?';
  const txtTitleAddress = 'Giao tới địa chỉ';

  return (
    <ScrollView>
      <View style={TryNewShopTheme.container}>
        <View style={TryNewShopTheme.search}>
          <TouchableOpacity style={TryNewShopTheme.buttomBack} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#0e0e0e" style={{ padding: 14 }} />
          </TouchableOpacity>
          <Search textSearch={txtSearch} foodTheme={TryNewShopTheme.cmSearch} />
          <SelectList defaultValue={DataPromotion.defaulValue} data={DataPromotion.data} />
        </View>
        <UserAddress theme={TryNewShopTheme.cmUserAddress} theme1={TryNewShopTheme.cmUserAddress1} titleAddress={txtTitleAddress} />
        <View style={TryNewShopTheme.category}>
          {DataTryNewShop.map((item, index) => {
            return (
              <Product1 key={index} data={item} />
            );
          }
          )}
        </View>
      </View>
    </ScrollView>
  );
}
