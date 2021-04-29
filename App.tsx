import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/';
import AppProvider from './src/hooks'



const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar style='dark' hidden={true} />
      <AppProvider>
        <View style={{ flex: 1}} >
            <Routes />
        </View>
      </AppProvider>

    </NavigationContainer>
  )
}

export default App
