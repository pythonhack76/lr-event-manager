import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import EventListScreen from '../screens/EventListScreen';
import AddEditEventScreen from '../screens/AddEditEventScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EventList" component={EventListScreen} />
        <Stack.Screen name="AddEditEvent" component={AddEditEventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
