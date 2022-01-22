import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import ProfileStack from "./ProfileStack";
import Search from "./Search";
import Ionicons from "@expo/vector-icons/Ionicons";
import Favorites from "./Favorites";


const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: (props) => <Ionicons name="ios-home" {...props} />,
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: (props) => <Ionicons name="search-outline" {...props} />,
        }}
      />
         <Tabs.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: "Favorites",
          headerShown: false,
          tabBarIcon: (props) => <Ionicons name="star-outline" {...props} />,
        }}
      />
      <Tabs.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: (props) => <Ionicons name="ios-person" {...props} />,
        }}
      />
    </Tabs.Navigator>
  );
};

export default MainTabs;