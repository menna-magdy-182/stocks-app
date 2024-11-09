/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ErrorFallback, StatusBar} from 'components';
import AppNavigator from 'navigation/AppNavigation';
import React from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  const queryClient = new QueryClient();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <StatusBar />
          <AppNavigator />
        </SafeAreaProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
