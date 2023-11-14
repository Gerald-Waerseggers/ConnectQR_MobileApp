// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ContactInfoPage from './ContactInfoPage';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="ConnectQR" component={HomeScreen} />
        <Stack.Screen name="Contact Info" component={ContactInfoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
