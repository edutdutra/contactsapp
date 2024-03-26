import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {THEME} from '../styles/theme';

import {AppRoutes} from './app.routes';
import {useAuth} from '../hooks/useAuth.tsx';
import {SignIn} from '../screens/SignIn';

export function Routes() {
  const {user} = useAuth();

  return (
    <View style={{flex: 1, backgroundColor: THEME.COLORS.GREY_200}}>
      <NavigationContainer>
        {user ? <AppRoutes /> : <SignIn />}
      </NavigationContainer>
    </View>
  );
}
