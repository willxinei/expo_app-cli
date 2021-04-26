import React from 'react'
import { Container, Linear, Title } from './styles'
import AppLoading from 'expo-app-loading'

import { Image } from 'react-native'

import Logo from '../../assets/Logo.png'
import { Fonts } from '../utils'
import Button from '../../components/Button'
import Input from '../../components/Input'
import {LinearGradient} from 'expo-linear-gradient'
 
const SingIn: React.FC = () => {
    const fonstsLoadd = Fonts()
    if (!fonstsLoadd){
        return <AppLoading />
    }

    return (
        <Linear 
        colors={['#E4C6D5', '#EAEAEA']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
       >
            <Container>
                <Image source={Logo} />
                <Title style={{fontFamily: 'MontBold'}} >Entrar com uma conta</Title>           
                <Input 
                    style={{fontFamily: 'MontBold'}} 
                    name='email' icon='lock' 
                    placeholder='E-mail' />
                <Input name='password' icon='lock' placeholder='Senha' />
                <Button onPress={() => {}} >Entrar</Button>
            </Container>
        </Linear>
    )
   
}

export default SingIn