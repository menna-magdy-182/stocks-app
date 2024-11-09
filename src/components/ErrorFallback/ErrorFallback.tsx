import Text from 'components/Text/Text';
import React from 'react';
import {View} from 'react-native';

import styles from './ErrorFallback.styles';

const ErrorFallback = () => {
  return (
    <View style={styles.container} testID="test:id/error-fallback">
      <Text>Something went wrong, please try again later.</Text>
    </View>
  );
};

export default ErrorFallback;
