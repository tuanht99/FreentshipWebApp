import React, { useEffect } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import TryNewShopTheme from "../themes/TryNewShopTheme";
import Feather from "react-native-vector-icons/Feather";
import Search from "../components/Search";
import UserAddress from "../components/UserAddress";
import Product1 from "../components/Product1";
import SelectList from "../components/SelectList";
import { DataPromotion } from "../core/data";
import { db } from "../core/config";
import {
  collection,
  query,
  limit,
  where,
  orderBy,
  getDocs,
} from "firebase/firestore";

export default function TryNewShopView() {
  const txtSearch = "Bạn thêm món gì?";
  const txtTitleAddress = "Giao tới địa chỉ";
  const categoriesSelection = [...DataPromotion.data.map((item) => item.value)];
  const [categories, setCategories] = React.useState({
    selection: DataPromotion.defaulValue,
    status: false,
    partner: true,
  });
  const [data, setData] = React.useState(null);
  const [limitData, setLimitData] = React.useState(10);
  const [isLoadMore, setIsLoadMore] = React.useState(false);
  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  function getProducts(value, valueCategories) {
    let q;
    let unsubscribe;
    switch (valueCategories.selection) {
      case categoriesSelection[0]:
        if (valueCategories.status && valueCategories.partner) {
          q = query(
            collection(db, "items"),
            where("status", "==", true),
            where("partner", "==", true),
            limit(value)
          );
        } else if (valueCategories.status && !valueCategories.partner) {
          q = query(
            collection(db, "items"),
            where("status", "==", true),
            limit(value)
          );
        } else if (!valueCategories.status && valueCategories.partner) {
          q = query(
            collection(db, "items"),
            where("partner", "==", true),
            limit(value)
          );
        } else {
          q = query(collection(db, "items"), limit(value));
        }
        break;
      case categoriesSelection[1]:
        if (valueCategories.status && valueCategories.partner) {
          q = query(
            collection(db, "items"),
            where("discount", ">", 0),
            where("status", "==", true),
            where("partner", "==", true),
            orderBy("discount", "desc"),
            limit(value)
          );
        } else if (valueCategories.status && !valueCategories.partner) {
          q = query(
            collection(db, "items"),
            where("discount", ">", 0),
            where("status", "==", true),
            orderBy("discount", "desc"),
            limit(value)
          );
        } else if (!valueCategories.status && valueCategories.partner) {
          q = query(
            collection(db, "items"),
            where("discount", ">", 0),
            where("partner", "==", true),
            orderBy("discount", "desc"),
            limit(value)
          );
        } else {
          q = query(
            collection(db, "items"),
            where("discount", ">", 0),
            orderBy("discount", "desc"),
            limit(value)
          );
        }
        break;
      default:
        console.log("Error getProducts");
        break;
    }

    const fetchData = async () => {
      unsubscribe = await getDocs(q)
        .then((querySnapshot) => {
          setData(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    };
    fetchData();
    return unsubscribe;
  }

  useEffect(() => {
    getProducts(limitData, categories);
  }, [limitData, categories]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <View style={TryNewShopTheme.container}>
      {isLoadMore && (
        <Modal visible={isLoadMore}>
          <Text>test</Text>
        </Modal>
      )}
      <View style={TryNewShopTheme.search}>
        <TouchableOpacity
          style={TryNewShopTheme.buttomBack}
          onPress={() => console.log("back")}
        >
          <Feather
            name="arrow-left"
            size={24}
            color="#0e0e0e"
            style={{ padding: 14 }}
          />
        </TouchableOpacity>
        <Search textSearch={txtSearch} foodTheme={TryNewShopTheme.cmSearch} />
      </View>
      <ScrollView
        scrollEventThrottle={400}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            if (data.length === limitData) {
              setIsLoadMore(true);
              setTimeout(() => {
                setIsLoadMore(false);
              }, 500);
              setLimitData(limitData + 1);
            }
            console.log("load more", limitData);
          }
        }}
      >
        <View
          style={[
            TryNewShopTheme.search,
            { paddingTop: 12, position: "absolute", width: "100%" },
          ]}
        >
          {data && (
            <SelectList
              defaultCategorySelected={DataPromotion.defaulValue}
              dataCategoriesSelect={DataPromotion.data}
              categories={categories}
              setCategories={setCategories}
              categoriesSelection={categoriesSelection}
              setLimitData={setLimitData}
            />
          )}
        </View>
        <UserAddress
          theme={TryNewShopTheme.cmUserAddress}
          theme1={TryNewShopTheme.cmUserAddress1}
          titleAddress={txtTitleAddress}
        />
        {data && (
          <View style={TryNewShopTheme.category}>
            {data.map((item, index) => {
              return <Product1 key={index} data={item} />;
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
