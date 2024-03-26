import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Contacts} from '../screens/Contacts';
import {Contact} from '../screens/Contact';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="contacts" component={Contacts} />
      <Screen name="contact" component={Contact} />
    </Navigator>
  );
}
