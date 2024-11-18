import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';  // Importa la pantalla de Login
import CreateAccount from './src/screens/Create';  // Importa la pantalla de Crear Cuenta

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} // Oculta el header para esta pantalla
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ headerShown: false }} // También puedes ocultar el header en Crear Cuenta
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
