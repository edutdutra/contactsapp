import {StyleSheet} from 'react-native';
import {THEME} from '../../styles/theme.ts';

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    backgroundColor: THEME.COLORS.GREY_300,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME.COLORS.GREY_700,
  },
  info: {
    fontSize: 14,
    color: THEME.COLORS.GREY_600,
  },
});
