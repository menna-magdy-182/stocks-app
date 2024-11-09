import React from 'react';
import {StatusBar as RNStatusBar, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from 'styles/colors';

const StatusBar = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.statusBar, {height: insets.top}]}>
      <RNStatusBar translucent backgroundColor={colors.statusbar} />
    </View>
  );
};

export default StatusBar;

const styles = StyleSheet.create({
  statusBar: {
    height: RNStatusBar.currentHeight,
    backgroundColor: colors.statusbar,
  },
});
