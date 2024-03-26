import {useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext.tsx';

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
