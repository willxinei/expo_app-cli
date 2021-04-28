import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SingIn from '../pages/SingIn'
import SingUp from '../pages/SingUp'

const Auth = createStackNavigator()

const AuthRoutes: React.FC = () => {
    return (
        <Auth.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Auth.Screen name='SignIn' component={SingIn} />
            <Auth.Screen name='SignUp' component={SingUp} />
        </Auth.Navigator>
    )
}

export default AuthRoutes