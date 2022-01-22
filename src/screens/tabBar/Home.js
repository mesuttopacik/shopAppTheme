import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Shop from "../../Shop/Shop";

import ProductDetail from "./ProductDetail"

const Stack = createNativeStackNavigator();

const Home = () => {
    return (
      <Stack.Navigator>
      <Stack.Screen name="Shop" component={Shop} options = {{headerShown: false}}/>
      {/* burda prop yarratıp shopta paremetre olarak geç product detailde yakalı ekrana ver bakalım nasıl olacak */}
      <Stack.Screen name="ProductDetail" component={ProductDetail} options = {{headerShown: true}}/>

      </Stack.Navigator>
    )
  };
  
 

  export default Home;
