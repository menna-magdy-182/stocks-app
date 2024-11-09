import images from 'assets/images';
import React from 'react';
import {Image, View} from 'react-native';

import styles from './Header.styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={images.common.logo} style={styles.logo} />
    </View>
  );
};

export default Header;
