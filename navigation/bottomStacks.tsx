import {
  Foundation,
  EvilIcons,
  FontAwesome,
  Entypo,
  Ionicons,
  SimpleLineIcons
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import { RootTabParamList, RootTabScreenProps } from '../types';

import styles from '../components/PlayerWidget/styles';
import LibraryScreen from '../screens/LibraryScreen';
import SearchScreen from '../screens/SearchScreen';
import AlbumScreen from '../screens/AlbumScreen';
import HomeStacks from './homeStacks';
import PremiumScreen from '../screens/PremiumScreen';
import SearchStacks from './searchStacks';
import LibraryStacks from './libraryStacks';

const BottomTab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  // const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator

      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          // position: 'absolute',
          paddingBottom: 5,
          paddingTop: 5,
          backgroundColor: '#0D031D',
          borderTopWidth: 0,
        },

      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStacks}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <Foundation name="home" size={30} style={{ marginBottom: -3 }} color={color} />,

        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <EvilIcons name="search" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="YourLibrary"
        component={LibraryStacks}
        options={{
          title: 'Library',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="md-library-sharp" size={26} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={PremiumScreen}
        options={{
          title: 'Premium',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome name="spotify" size={28} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      {/* <BottomTab.Screen
      name="AlbumScreen"
      component={AlbumScreen}
      options={{
        headerShown: false,
      }}
    /> */}
    </BottomTab.Navigator>
  );
}

