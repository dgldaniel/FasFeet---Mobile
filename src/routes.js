import 'react-native-gesture-handler';

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';
import Orders from './pages/Orders';
import Profile from './pages/Profile';

import DeliveryDetails from './pages/DeliveryDetails';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#7159c1',
      }}
    >
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color }) => (
            <Icon name="format-align-justify" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DeliveryDetails">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DeliveryDetails"
          component={DeliveryDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
