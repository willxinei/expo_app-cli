import React from 'react'
import { Container, Linear, Title, CreateAccountContainer, AccountText } from './styles'
import AppLoading from 'expo-app-loading'
import {AntDesign as Icon} from '@expo/vector-icons'

import { Image, ScrollView } from 'react-native'

import Logo from '../../assets/Logo.png'
import { Fonts } from '../utils'
import Button from '../../components/Button'
import Input from '../../components/Input'
 
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
            <ScrollView
                contentContainerStyle={{flex: 1}}
            >
                <Container>
                    <Image source={Logo} />
                    <Title style={{fontFamily: 'MontBold'}} >Entrar com uma conta</Title>           
                    <Input 
                        style={{fontFamily: 'MontBold'}} 
                        name='mail' icon='mail' 
                        placeholder='E-mail' />
                    <Input 
                        style={{fontFamily: 'MontBold'}} 
                        name='password' 
                        icon='lock' 
                        placeholder='Senha' 
                    />
                    <Button onPress={() => {}} >Entrar</Button>
                </Container>
            </ScrollView>
            <CreateAccountContainer>
                <Icon name='back' color='#999999' size={20} />
                <AccountText>Voltar para login</AccountText>
            </CreateAccountContainer>

        </Linear>
    )
   
}

export default SingIn