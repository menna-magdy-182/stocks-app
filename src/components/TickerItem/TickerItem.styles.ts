import {SCREEN_WIDTH} from 'constants/sizes';
import {StyleSheet} from 'react-native';
import colors from 'styles/colors';
import spacing from 'styles/spacing';

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.44,
    marginBottom: 20,
    marginEnd: spacing.md,
    backgroundColor: colors.primary,
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: colors.border,
  },
  textTicker: {
    fontSize: 18,
    marginBottom: 12,
  },
  textName: {
    color: colors.gray,
    fontSize: 12,
    textAlign: 'center',
    maxWidth: '80%',
  },
  image: {
    width: '25%',
    height: 40,
    marginBottom: 12,
  },
  imageFallbackContainer: {
    minWidth: '25%',
    height: 40,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
  },
});

export default styles;
