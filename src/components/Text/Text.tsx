import React from 'react';
import {StyleSheet, Text as TextRN, TextProps} from 'react-native';
import colors from 'styles/colors';

const Text = (props: TextProps) => {
  return <TextRN {...props} style={[styles.text, props?.style]} />;
};

export default Text;

const styles = StyleSheet.create({
  text: {
    color: colors.text,
  },
});
