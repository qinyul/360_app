import React,{ useEffect,useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screen/loginScreen'
import LoginProcessScreen from './screen/loginProcesScreen';
import HomeScreen from './screen/homeScreen';


export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
        <Stack.Screen name="LoginProcess" options={{headerShown:false}} component={LoginProcessScreen} />
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

