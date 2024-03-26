import {Text, TextInput, TextInputProps, View} from 'react-native';
import {styles} from './styles.ts';
import {THEME} from '../../styles/theme.ts';

type Props = TextInputProps & {
  inScrollView?: boolean;
  errorMessage?: string;
};

export function Input({inScrollView = false, errorMessage, ...rest}: Props) {
  return (
    <View style={[styles.container, inScrollView && styles.mb]}>
      <TextInput
        style={styles.input}
        placeholderTextColor={THEME.COLORS.GREY_400}
        {...rest}
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
}
