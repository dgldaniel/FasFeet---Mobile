import 'react-native-gesture-handler';

import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { navigationRef } from './services/RootNavigation';

import SignIn from './pages/SignIn';
import Orders from './pages/Orders';
import Profile from './pages/Profile';

import DeliveryDetails from './pages/DeliveryDetails';
import InformProblem from './pages/InformProblem';
import ShowProblem from './pages/ShowProblem';
import ConfirmDelivery from './pages/ConfirmDelivery';

import CameraModal from './pages/ConfirmDelivery/CameraModal';

Icon.loadFont();

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const signed = useSelector(state => state.auth.signed);

  function MainStackScreen() {
    const navigation = useNavigation();

    return (
      <MainStack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
        }}
      >
        <MainStack.Screen
          name="Dashboard"
          component={Orders}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="DeliveryDetails"
          component={DeliveryDetails}
          options={{
            title: 'Detalhes da Encomenda',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Dashboard');
                }}
              >
                <Icon name="chevron-left" size={20} color="#FFF" />
              </TouchableOpacity>
            ),
          }}
        />
        <MainStack.Screen
          name="InformProblem"
          component={InformProblem}
          options={{
            title: 'Informar o Problema',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DeliveryDetails');
                }}
              >
                <Icon name="chevron-left" size={20} color="#FFF" />
              </TouchableOpacity>
            ),
          }}
        />
        <MainStack.Screen
          name="ShowProblem"
          component={ShowProblem}
          options={{
            title: 'Visualizar o Problema',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DeliveryDetails');
                }}
              >
                <Icon name="chevron-left" size={20} color="#FFF" />
              </TouchableOpacity>
            ),
          }}
        />
        <MainStack.Screen
          name="ConfirmDelivery"
          component={ConfirmDelivery}
          options={{
            title: 'Confirmar entrega',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DeliveryDetails');
                }}
              >
                <Icon name="chevron-left" size={20} color="#FFF" />
              </TouchableOpacity>
            ),
          }}
        />
      </MainStack.Navigator>
    );
  }

  function RootStackScreen() {
    return (
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="CameraModal"
          component={CameraModal}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {!signed ? (
        <MainStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <MainStack.Screen name="SignIn" component={SignIn} />
        </MainStack.Navigator>
      ) : (
        <Tab.Navigator
          keyboardHidesTabBar
          tabBarOptions={{
            activeTintColor: '#7159c1',
          }}
        >
          <Tab.Screen
            name="DashboardContainer"
            component={RootStackScreen}
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
      )}
    </NavigationContainer>
  );
}
