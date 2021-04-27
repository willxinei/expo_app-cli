import React, { useCallback } from 'react'
import { BackContainer, BackText, Boto, Container, Linear, Title } from './styles'
import AppLoading from 'expo-app-loading'
import {AntDesign as Icon} from '@expo/vector-icons'

import { Image, ScrollView } from 'react-native'

import Logo from '../../assets/Logo.png'
import { Fonts } from '../utils'
import Button from '../../components/Button'
import Input from '../../components/Input'

const SingUp: React.FC = () => {
    const handleSigIn = useCallback((data) => {
        console.log(data)
    }, [])

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
                    <Title style={{fontFamily: 'MontBold'}} >Criar uma conta</Title>           
                    
                        <Input 
                            name='user' icon='user' 
                            placeholder='Nome' 
                            style={{fontFamily: 'MontBold'}} 
                        />
                        <Input 
                            name='mail' icon='mail' 
                            placeholder='E-mail' 
                            style={{fontFamily: 'MontBold'}} 
                        />
                        <Input 
                            name='Telefone' icon='mobile1' 
                            placeholder='Telefone / celular' 
                            style={{fontFamily: 'MontBold'}} 
                        />
                        <Input 
                            name='password' icon='lock' 
                            placeholder='Senha' 
                            style={{fontFamily: 'MontBold'}} 
                        />
                        
                        <Button onPress={() => {}} >Entrar</Button>
                        <Boto />
                   
                </Container>
            </ScrollView>
            <BackContainer>
                <Icon name='back' color='#999999' size={20} />
                <BackText>Voltar para login</BackText>
            </BackContainer>
        </Linear>
    )
   
}

export default SingUp