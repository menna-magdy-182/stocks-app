/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {StatusBar} from 'components';
import AppNavigator from 'navigation/AppNavigation';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
