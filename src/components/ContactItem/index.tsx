import {Alert, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles.ts';
import {THEME} from '../../styles/theme.ts';
import {ContactDTO} from '../../dtos/ContactDTO.ts';
import {useNavigation} from '@react-navigation/native';

type Props = {
  data: ContactDTO;
  onDelete: (id: string) => void;
};

export function ContactItem({data, onDelete}: Props) {
  const {navigate} = useNavigation();

  function handleDeleteContact() {
    Alert.alert('Remover contado', 'Deseja remover este contato?', [
      {text: 'Não', style: 'cancel'},
      {text: 'Sim', onPress: () => onDelete(data._id)},
    ]);
  }

  function handleEditContact() {
    navigate('contact', {
      id: data._id,
    });
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{data.name + ' ' + data.last_name}</Text>
        <Text style={styles.info}>{data.phone}</Text>
        <Text style={styles.info}>{data.email}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={handleEditContact}>
          <Icon name="account-edit" size={36} color={THEME.COLORS.BLUE_LIGHT} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteContact}>
          <Icon name="trash-can" size={36} color={THEME.COLORS.RED_LIGHT} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
