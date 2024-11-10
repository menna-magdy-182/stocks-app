import {SCREEN_WIDTH} from 'constants/sizes';
import {StyleSheet} from 'react-native';
import colors from 'styles/colors';
import spacing from 'styles/spacing';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
    paddingVertical: 13,
    backgroundColor: colors.headerBackground,
  },
  logo: {
    width: SCREEN_WIDTH * 0.3,
    aspectRatio: 3.5,
  },
});

export default styles;
