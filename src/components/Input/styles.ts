import {StyleSheet} from 'react-native';
import {THEME} from '../../styles/theme.ts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 70,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: THEME.COLORS.GREY_100,
  },
  mb: {
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: THEME.COLORS.GREY_600,
  },
  errorMessage: {
    marginBottom: 4,
    fontSize: 14,
    color: THEME.COLORS.RED_LIGHT,
  },
});
