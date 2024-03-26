import {StyleSheet} from 'react-native';
import {THEME} from '../../styles/theme.ts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: THEME.COLORS.GREY_200,
  },
  list: {
    marginTop: 32,
  },
  empty: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.COLORS.GREY_700,
    textAlign: 'center',
    marginTop: 30,
  },
});
