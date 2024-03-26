import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView, Text, View} from 'react-native';
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import {styles} from './styles.ts';
import {z} from 'zod';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useEffect, useState} from 'react';
import {api} from '../../libs/axios';
import {useAuth} from '../../hooks/useAuth.tsx';

type RouteParamsProps = {
  id: string;
};

const contactFormSchema = z.object({
  name: z.string({required_error: 'Campo obrigatório'}),
  last_name: z.string({required_error: 'Campo obrigatório'}),
  phone: z.string({required_error: 'Campo obrigatório'}),
  email: z
    .string({required_error: 'Campo obrigatório'})
    .email({message: 'Email inválido'}),
  birth_date: z.string({required_error: 'Campo obrigatório'}),
  address: z.string({required_error: 'Campo obrigatório'}),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const {user} = useAuth();
  const route = useRoute();
  const {navigate, goBack} = useNavigation();
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: {errors},
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const {id} = route.params as RouteParamsProps;

  function handleCancel() {
    reset();
    goBack();
  }

  async function handleSaveContact({
    name,
    last_name,
    phone,
    email,
    address,
    birth_date,
  }: ContactFormInputs) {
    try {
      setIsLoading(true);

      if (id) {
        await api.put(
          `/contacts/${id}`,
          {name, last_name, phone, email, address, birth_date},
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          },
        );
      } else {
        await api.post(
          '/contacts',
          {name, last_name, phone, email, address, birth_date},
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          },
        );
      }

      navigate('contacts');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchContactData() {
    try {
      const {data} = await api.get(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      const {contact} = data;

      setValue('name', contact.name);
      setValue('last_name', contact.last_name);
      setValue('phone', contact.phone);
      setValue('email', contact.email);
      setValue('birth_date', contact.birth_date);
      setValue('address', contact.address);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (id) {
      fetchContactData();
    }
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Adicionar contato</Text>
      </View>

      <View style={styles.form}>
        <ScrollView>
          <Controller
            control={control}
            name="name"
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                inScrollView
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="last_name"
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Sobrenome"
                onChangeText={onChange}
                value={value}
                inScrollView
                errorMessage={errors.last_name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="phone"
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Telefone"
                onChangeText={onChange}
                value={value}
                keyboardType="phone-pad"
                inScrollView
                errorMessage={errors.phone?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="E-mail"
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                keyboardType="email-address"
                inScrollView
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="birth_date"
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Data de nascimento"
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
                inScrollView
                errorMessage={errors.birth_date?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="address"
            render={({field: {onChange, value}}) => (
              <Input
                placeholder="Endereço"
                onChangeText={onChange}
                value={value}
                inScrollView
                errorMessage={errors.address?.message}
              />
            )}
          />
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <Button title="Cancelar" variant="SECONDARY" onPress={handleCancel} />
        <Button
          title={id ? 'Editar' : 'Adicionar'}
          onPress={handleSubmit(handleSaveContact)}
          isLoading={isLoading}
          disabled={isLoading}
        />
      </View>
    </View>
  );
}
