import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Loading} from '../Loading';
import {styles} from './styles.ts';

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
  variant?: 'PRIMARY' | 'SECONDARY';
};

export function Button({
  title,
  isLoading = false,
  variant = 'PRIMARY',
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        variant === 'PRIMARY' ? styles.primary : styles.secondary,
      ]}
      activeOpacity={0.7}
      {...rest}>
      {isLoading ? <Loading /> : <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  );
}
