import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const Button = (props) => {
  return (
    <View>
      <TouchableOpacity {...props} style={{ ...styles.button, ...props.style }}>
        <Text>{props.children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: { alignItems: "center", backgroundColor: "#DDDDDD", padding: 10 },
});

export default Button;
