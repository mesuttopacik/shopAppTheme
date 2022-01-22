import About from "./About";
import MainTabs from "../tabBar/MainTabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="MainTabs" component={MainTabs} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
  );
};

export default DrawerNav;