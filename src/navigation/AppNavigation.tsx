import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import MainStackNavigator from './MainNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
