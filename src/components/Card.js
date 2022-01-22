import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{...styles.card, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems:'center',
    margin:2,
    // shadowColor: "black",
    // shadowOffset: { height: 0, width: 1 },
    // shadowRadius: 6,
    // shadowOpacity: 0.26,
    backgroundColor: "white",
    // elevation: 8,
    padding: 10,
    borderRadius: 10,
    borderWidth:1,
    borderColor:'#e8e6e3'
  },
});

export default Card;