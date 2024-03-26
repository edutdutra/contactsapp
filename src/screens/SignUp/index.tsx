import {useState} from 'react';
import {Text, View} from 'react-native';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useAuth} from '../../hooks/useAuth.tsx';
import {z} from 'zod';

import {styles} from './styles.ts';
import {THEME} from '../../styles/theme.ts';

const signInFormSchema = z.object({
  email: z.string({required_error: 'Campo obrigatório'}),
  password: z.string({required_error: 'Campo obrigatório'}),
});

type SignInFormInputs = z.infer<typeof signInFormSchema>;

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const {signIn} = useAuth();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignInFormInputs>({
    resolver: zodResolver(signInFormSchema),
  });

  async function handleSignIn({email, password}: SignInFormInputs) {
    try {
      setIsLoading(true);

      await signIn(email, password);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="contact-page" color={THEME.COLORS.GREY_700} size={56} />
        <Text style={styles.title}>Contatos</Text>
        <Text style={styles.subtitle}>Seu gerenciamento de contatos</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formTitle}>Acesse sua conta</Text>

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
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({field: {onChange, value}}) => (
            <Input
              placeholder="Senha"
              onChangeText={onChange}
              value={value}
              secureTextEntry
              errorMessage={errors.password?.message}
            />
          )}
        />
      </View>

      <Button
        title="Entrar"
        onPress={handleSubmit(handleSignIn)}
        isLoading={isLoading}
        disabled={isLoading}
      />

      <Button title="Criar conta" variant="SECONDARY"/>
    </View>
  );
}
