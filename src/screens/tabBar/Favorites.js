import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import colors from '../../../constants/colors'

import { useDispatch, useSelector } from "react-redux";
import { alertAction } from "../../../redux/actions/alertAction";
import { removeFromCartAction } from "../../../redux/actions/cartActions";
import { getProductsAction } from "../../../redux/actions/getProductsAction";
import Card from "../../components/Card";

const Favorites = () => {
  const dispatch = useDispatch();
  const { cart, cartTotal } = useSelector((state) => state.cartReducer);
 

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  const { alert } = useSelector((state) => state.alertReducer);

  const removeFromCartHandler = (el) => {
    dispatch(removeFromCartAction(el, cart));
    dispatch(alertAction(""));
  };

  const cartItem = cart.map((i) => (
    <Card key={i.id}>
      <Image
        style={styles.imageContanier}
        source={{
          uri: i.image,
        }}
      />
      <Text>{`${i.title}: $${i.price}`}</Text>
      <Button
        title="remove from cart"
        onPress={() => {
          removeFromCartHandler(i);
        }}
      />
    </Card>
  ));
  return (
    <SafeAreaView style = {styles.contanier}>
      <ScrollView>
        <View style = {styles.cardContanier}>{cartItem}</View>
        <Card style = {styles.paymentContent}>
          <Text>Totel Price: ${cartTotal}</Text>
          <Button style={styles.button} title='complate the shopping' />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contanier: {
flex:1,
  },
  imageContanier: {
    width: Dimensions.get("window").width/1.4,
    height: Dimensions.get("window").height / 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    margin:20,
  },
  cardContanier: {
    flex: 1,
    justifyContent: "center",
  },
  paymentContent: {
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around'

  },
  button:{
    flex:1,
      borderWidth:2,
      borderColor: colors.sencondery,
  }
});

export default Favorites;
