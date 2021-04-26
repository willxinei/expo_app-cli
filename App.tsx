import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './src/routes';


const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <View style={{ flex: 1}} >
          <AuthRoutes />
      </View>

    </NavigationContainer>
  )
}

export default App
