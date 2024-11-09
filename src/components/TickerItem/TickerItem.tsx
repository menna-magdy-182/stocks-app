import {Text} from 'components';
import {Ticker} from 'models/api';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import endpoints from 'services/endpoints';

import styles from './TickerItem.styles';

interface TickerItemProps {
  item: Ticker;
}
const TickerItem = ({item}: TickerItemProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <TouchableOpacity style={styles.container}>
      {imageError ? (
        <View style={styles.imageFallbackContainer}>
          <Text>{item.ticker.substring(0, 2)}</Text>
        </View>
      ) : (
        <FastImage
          source={{uri: endpoints.tickerLogo(item?.ticker)}}
          style={styles.image}
          resizeMode="contain"
          onError={() => setImageError(true)}
        />
      )}

      <Text style={styles.textTicker} numberOfLines={1}>
        {item?.ticker}
      </Text>
      <Text style={styles.textName} numberOfLines={2}>
        {item?.name}
      </Text>
    </TouchableOpacity>
  );
};

export default TickerItem;
