// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Linking } from 'react-native';
import HomeScreen from './HomeScreen';
import ContactInfoPage from './ContactInfoPage';
import SettingsScreen from './SettingsScreen';
const Stack = createStackNavigator();




const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="ConnectQR" component={HomeScreen} />
        <Stack.Screen name="Contact Info" component={ContactInfoPage} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{gestureDirection: "horizontal-inverted"}} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
