import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FocusScreen } from './src/screens/FocusScreen';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#09090b', borderTopWidth: 0 } }}>
        <Tab.Screen name='Focus' component={FocusScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}