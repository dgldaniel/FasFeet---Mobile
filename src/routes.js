import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import Orders from './pages/Orders';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
