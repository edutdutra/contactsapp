import {StyleSheet} from 'react-native';
import {THEME} from '../../styles/theme.ts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 48,
    minHeight: 48,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: THEME.COLORS.BLUE,
  },
  secondary: {
    backgroundColor: THEME.COLORS.GREY_700,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: THEME.COLORS.GREY_100,
  },
});
