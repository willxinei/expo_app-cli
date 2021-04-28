import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DashBoard from '../pages/DashBoard'

const Auth = createStackNavigator()

const AppRoutes: React.FC = () => {
    return (
        <Auth.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Auth.Screen name='DashBoard' component={DashBoard} />
        </Auth.Navigator>
    )
}

export default AppRoutes