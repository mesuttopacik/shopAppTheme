import { View, Text, Button } from "react-native";
import react, { useState } from "react";


const Profile = ({ navigation }) => {
  const [user, setuser] = useState("mesut");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>You have to Sing In</Text>
      <Button
        title="SingIn"
        onPress={() => {
          navigation.navigate("SignIn", { user });
        }}
      />
      <Button
        title="SingUp"
        onPress={() => {
          navigation.navigate("SingUp");
        }}
      />
    </View>
  );
};

export default Profile;
