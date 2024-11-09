import React from 'react';
import {ActivityIndicator} from 'react-native';
import {StyleSheet} from 'react-native';
import colors from 'styles/colors';

const ScreenLoader = () => {
  return (
    <ActivityIndicator
      size={'large'}
      style={styles.indicator}
      color={colors.activityIndicator}
      testID="test:id/loadingIndicator"
    />
  );
};

export default ScreenLoader;

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    alignSelf: 'center',
  },
});
