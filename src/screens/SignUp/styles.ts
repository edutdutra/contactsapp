import {StyleSheet} from 'react-native';
import {THEME} from '../../styles/theme.ts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 48,
    gap: 6,
    backgroundColor: THEME.COLORS.GREY_200,
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    color: THEME.COLORS.GREY_700,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: THEME.COLORS.GREY_500,
  },
  form: {
    flex: 1,
    gap: 16,
  },
  formTitle: {
    textAlign: 'center',
    fontSize: 14,
    color: THEME.COLORS.GREY_600,
  },
});
