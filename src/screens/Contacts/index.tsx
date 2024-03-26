import {FlatList, Text, View} from 'react-native';
import {Header} from '../../components/Header';
import {styles} from './styles.ts';
import {ContactItem} from '../../components/ContactItem';
import {useCallback, useState} from 'react';
import {api} from '../../libs/axios';
import {useAuth} from '../../hooks/useAuth.tsx';
import {ContactDTO} from '../../dtos/ContactDTO.ts';
import {Loading} from '../../components/Loading';
import {useFocusEffect} from '@react-navigation/native';

export function Contacts() {
  const [contacts, setContacts] = useState<ContactDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const {user} = useAuth();

  async function fetchContacts() {
    try {
      setIsLoading(true);
      const {data} = await api.get('/contacts', {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      setContacts(data.contacts);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteContact(id: string) {
    try {
      await api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      setContacts(prevState => {
        const newState = prevState.filter(state => state._id !== id);

        return newState;
      });
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchContacts();
    }, []),
  );

  return (
    <View style={styles.container}>
      <Header />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          style={styles.list}
          data={contacts}
          renderItem={({item}) => (
            <ContactItem data={item} onDelete={deleteContact} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.empty}>Nenhum contado adicionado</Text>
          }
        />
      )}
    </View>
  );
}
