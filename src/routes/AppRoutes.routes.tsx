import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DashBoard from '../pages/DashBoard'
import Profile from '../pages/Profile'
import { View } from 'react-native'
import Agenda from '../pages/Agenda'

const Auth = createStackNavigator()

const AppRoutes: React.FC = () => {
   return (
      <Auth.Navigator
         screenOptions={{
               headerShown: false
         }}
      >
         <Auth.Screen name='DashBoard' component={DashBoard} />
         <Auth.Screen name='Profile' component={Profile} />
         <Auth.Screen name='Agenda' component={Agenda} />
      </Auth.Navigator>
   )
}

export default AppRoutes