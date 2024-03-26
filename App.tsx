import {AuthContextProvider} from './src/contexts/AuthContext.tsx';
import {StatusBar} from 'react-native';
import {Routes} from './src/routes';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </>
  );
}

export default App;
