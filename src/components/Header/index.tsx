import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {Button} from '../Button';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles.ts';
import {THEME} from '../../styles/theme.ts';
import {useAuth} from '../../hooks/useAuth.tsx';

export function Header() {
  const {user} = useAuth();
  const {navigate} = useNavigation();

  function handleNewContact() {
    navigate('contact', {
      id: undefined,
    });
  }

  return (
    <View style={styles.container}>
      <Icon name="account-circle" color={THEME.COLORS.GREY_700} size={42} />
      <View style={styles.content}>
        <Text style={styles.message}>Boas vindas,</Text>
        <Text style={styles.highlight}>{user?.name || 'Usuário'}</Text>
      </View>
      <Button
        title="Adicionar contato"
        variant="SECONDARY"
        onPress={handleNewContact}
      />
    </View>
  );
}
