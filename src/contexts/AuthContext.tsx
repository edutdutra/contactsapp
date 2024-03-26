import {createContext, ReactNode, useState} from 'react';
import {api} from '../libs/axios';
import {UserDTO} from '../dtos/UserDTO.ts';

export type AuthContextDataProps = {
  user: UserDTO | null;
  signIn: (email: string, password: string) => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
);

export function AuthContextProvider({children}: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO | null>(null);

  async function signIn(email: string, password: string) {
    try {
      const {data} = await api.post('/auth/login', {
        email,
        password,
      });

      setUser({name: data.user.name, token: data.token});
    } catch (error) {
      console.log('ERROR => ', JSON.stringify(error));
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
