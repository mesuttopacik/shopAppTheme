import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView, StyleSheet, Text, Image, ScrollView, Dimensions, Alert } from "react-native";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { addToCartAction } from "../../../redux/actions/cartActions";
import { alertAction } from "../../../redux/actions/alertAction";

const ProductDetail = ({ route }) => {
    const item = route.params.item.item;
  const { title, price, description, image } = route.params.item.item;
  const dispatch = useDispatch()
const {cart} = useSelector((state) => state.cartReducer)
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
  return (
    <SafeAreaView style={styles.contanier}>
        <ScrollView>
        <Card style={styles.imageContanier}>
      <Image
        style={styles.imageContanier}
        source={{
          uri: image,
        }}
      />
      </Card>
      <Card>
        <Text>{title}</Text>
        <Text>price: ${price}</Text>
      </Card>
      <Card>
        <Text>{description}</Text>
      </Card>
      <Button title = 'Add To Cart' onPress = {()=>addToCartHandler(item)} />
      </ScrollView>
    </SafeAreaView>
    
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
    contanier:{
        flex:1,
    },
    imageContanier:{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom:13
    }
});
