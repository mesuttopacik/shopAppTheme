import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../SingIn";
import SingUp from "../SingUp";
import Profile from "./Profile";

const Stack = createNativeStackNavigator();


const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={({ route }) => ({ title: `Hi, ${route.params.user}` })}
      />
      <Stack.Screen
        name="SingUp"
        component={SingUp}
        options={{ title: "Sing Up" }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;