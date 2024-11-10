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

const TickerItem: React.FC<TickerItemProps> = ({item}) => {
  const [hasImageError, setHasImageError] = useState(false);

  const handleImageError = () => setHasImageError(true);

  return (
    <TouchableOpacity style={styles.container}>
      {hasImageError ? (
        <View style={styles.imageFallbackContainer}>
          <Text>{item?.ticker.slice(0, 2)}</Text>
        </View>
      ) : (
        <FastImage
          testID="test:id/ticker-image"
          source={{uri: endpoints.tickerLogo(item?.ticker)}}
          style={styles.image}
          resizeMode="contain"
          onError={handleImageError}
        />
      )}

      <Text style={styles.textTicker} numberOfLines={1}>
        {item?.ticker}
      </Text>
      <Text style={styles.textName} numberOfLines={2}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default TickerItem;
