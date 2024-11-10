import images from 'assets/images';
import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './Header.styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <FastImage
        source={images.common.logo}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default Header;
