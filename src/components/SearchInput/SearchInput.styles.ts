import {StyleSheet} from 'react-native';
import colors from 'styles/colors';
import spacing from 'styles/spacing';

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: spacing.md,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    paddingHorizontal: 20,
    minHeight: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  input: {
    alignSelf: 'stretch',
    flex: 1,
    color: colors.text,
  },
});

export default styles;
