import {StyleSheet} from 'react-native';
import {THEME} from '../../styles/theme.ts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: THEME.COLORS.GREY_200,
  },
  header: {
    alignItems: 'center',
    marginTop: 24,
  },
  content: {
    flex: 1,
    marginTop: 48,
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.COLORS.GREY_700,
  },
  form: {
    flex: 1,
    marginTop: 32,
    gap: 16,
  },
});
