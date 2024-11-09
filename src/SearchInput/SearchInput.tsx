import React, {FC} from 'react';
import {TextInput, TextStyle, View, ViewStyle} from 'react-native';
import colors from 'styles/colors';

import styles from './SearchInput.styles';

type SearchInputProps = {
  onChangeText: (value: string) => void;
  style?: ViewStyle;
  inputStyle?: TextStyle;
};

const SearchInput: FC<SearchInputProps> = ({
  onChangeText,
  style,
  inputStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={'Search for stocks'}
        placeholderTextColor={colors.placeholder}
        style={[styles.input, inputStyle]}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchInput;
