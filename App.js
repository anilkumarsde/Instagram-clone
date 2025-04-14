import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

//screen

import HomeScreen from './src/screen/HomeScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import SearchScreen from './src/screen/SearchScreen';
import NewPostScreen from './src/screen/NewPostScreen';
import ReelsScreen from './src/screen/ReelsScreen';

//icons
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        <Tab.Screen
          name="Home"
          screenOptions={{headerShown: false}}
          component={HomeScreen}
          options={{
            tabBarIcon: () => {
              return <Entypo name={'home'} size={30} />;
            },
          }}
        />
        <Tab.Screen
          name="Seach"
          component={SearchScreen}
          options={{
            tabBarIcon: () => {
              return <Ionicons name={'search'} size={30} />;
            },
          }}
        />
        <Tab.Screen
          name="NewPost"
          component={NewPostScreen}
          options={{
            tabBarIcon: () => {
              return <Feather name={'plus-square'} size={30} />;
            },
          }}
        />
        <Tab.Screen
          name="Reels"
          component={ReelsScreen}
          options={{
            tabBarIcon: () => {
              return <MaterialIcons name={'play-circle'} size={30} />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => {
              return <MaterialCommunityIcons name={'face-woman'} size={30} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
