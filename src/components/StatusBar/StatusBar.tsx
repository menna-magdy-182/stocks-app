import React from 'react';
import {StatusBar as RNStatusBar, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from 'styles/colors';

const StatusBar = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.statusBar, {height: insets.top}]}>
      <RNStatusBar translucent backgroundColor={Colors.statusbar} />
    </View>
  );
};

export default StatusBar;

const styles = StyleSheet.create({
  statusBar: {
    height: RNStatusBar.currentHeight,
    backgroundColor: Colors.statusbar,
  },
});
