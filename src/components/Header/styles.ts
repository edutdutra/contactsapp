import {StyleSheet} from 'react-native';
import {THEME} from '../../styles/theme.ts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    gap: 8,
    justifyContent: 'center',
    marginTop: 24,
  },
  content: {
    flex: 1,
  },
  message: {
    fontSize: 16,
    color: THEME.COLORS.GREY_700,
  },
  highlight: {
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME.COLORS.GREY_700,
  },
});
