import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./src/screens/drawer/DrawerNav";
import { Provider } from "react-redux";
import store from "./redux/reducer/store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
