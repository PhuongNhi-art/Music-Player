import { createStackNavigator } from "@react-navigation/stack";
import SearchDetailScreen from "../screens/SearchDetailScreen";
import SearchScreen from "../screens/SearchScreen";
import React from 'react';
import TypeScreen from "../screens/TypeScreen";
const Stack = createStackNavigator();
const SearchStacks = () => (
    <Stack.Navigator initialRouteName="SearchScreen">
     
        <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchDetailScreen"
        component={SearchDetailScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TypeScreen"
        component={TypeScreen}
        options={{
          headerTintColor: 'white',
          headerTitle: 'Search by type',
          headerStyle: { backgroundColor: '#150929', }
          // headerShown: false,
        }}
      />
      
    </Stack.Navigator>
  );
  
  export default SearchStacks;