import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Alert,
  Dimensions,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { alertAction } from "../../redux/actions/alertAction";
import { addToCartAction } from "../../redux/actions/cartActions";
import { getProductsAction } from "../../redux/actions/getProductsAction";
import Card from "../components/Card";

const Shop = ({navigation}) => {
  const dispatch = useDispatch();
  const [title, settitle] = useState('deneme')
  const { cart, cartTotal } = useSelector((state) => state.cartReducer);

  // const { alert } = useSelector((state) => state.alertReducer);

  const { product } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  const addToCartHandler = (el) => {
    let addIt = true;
    cart.forEach((element) => {
      if (element.id === el.id) addIt = false;
    });
    if (addIt) {
      dispatch(addToCartAction(el, cart));
      dispatch(alertAction(""));
    } else {
      // dispatch(alertAction(`${el.name} is already in your cart`));
      Alert.alert(
        "mükerer ekeleme hatası",
        "this product is alredy in your cart"
      );
    }
  };


  const cartItem = (item) => (
    <Card style = {styles.cardContanier} key={item.item.id}>
      <View style={styles.imageContanier}>
        <Image
          style={styles.image}
          source={{
            uri: item.item.image,
          }}
        />
      </View>
      <View style= {styles.titleContanier}>
        <Text>{item.item.title}</Text>
      </View>
      <View style= {styles.priceContanier}>
        <Text>Price: ${item.item.price}</Text>
      </View>
      <Button title="gotoDetail" onPress={() => navigation.navigate("ProductDetail", { item })} />

      <Button title="Add To Cart" onPress={() => addToCartHandler(item.item)} />
    </Card>
  );
  return (
    <SafeAreaView>
      <View>
        {/* <View style={styles.cardContanier}>{cartItem}</View> */}
        <FlatList
          style={{ margin: 5 }}
          data={product}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={(item) => cartItem(item)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContanier: {
    flex:6,
    // width: "20%",
    // height: "20%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // overflow: 'hidden'
  },
  priceContanier:{
flex:1
  },
  titleContanier:{
    flex:1,
    marginVertical:6,
    overflow:'hidden',
    justifyContent:'flex-end',
    alignItems:'flex-end',
      },
  image: {
    width: Dimensions.get("window").width / 2.4,
    height: Dimensions.get("window").height / 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // overflow: "hidden",
  },
  cardContanier: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'space-between',
  },
});

export default Shop;
