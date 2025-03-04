import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import { CartProvider } from "./CartContext";

const Stack = createStackNavigator();

export default function App() {
  return (
   <CartProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Cart" component={CartScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
   </CartProvider>
  );
}

