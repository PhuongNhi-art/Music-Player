import { createStackNavigator } from "@react-navigation/stack";
import SearchDetailScreen from "../screens/SearchDetailScreen";
import SearchScreen from "../screens/SearchScreen";
import React from 'react';
import TypeScreen from "../screens/TypeScreen";
import LibraryScreen from "../screens/LibraryScreen";
import ArtistScreen from "../screens/ArtistScreen";
const Stack = createStackNavigator();
const LibraryStacks = () => (
    <Stack.Navigator initialRouteName="LibraryScreen">
     
        <Stack.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ArtistScreen"
        component={ArtistScreen}
        options={{
          headerTintColor: 'white',
          headerTitle: 'Search by artist',
          headerStyle: { backgroundColor: '#150929', }
        }}
      />
    
      
    </Stack.Navigator>
  );
  
  export default LibraryStacks;