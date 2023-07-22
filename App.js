

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details';
import Home from './Home';
import AddCartbtn from './components/AddCartbtn';

const Stack = createStackNavigator();
const App = () => {
   return (

    <NavigationContainer  screenOptions={{ headerShown: false}}>

      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={Home} />
        <Stack.Screen options={{headerShown: false}}  name="two" component={Details} />

      </Stack.Navigator>

    </NavigationContainer>

   );
};
export default App;


