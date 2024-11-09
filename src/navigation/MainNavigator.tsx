import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MainStackParamList} from 'types/navigation';

import {HomeScreen} from '../screens';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
