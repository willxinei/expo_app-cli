import React, { useCallback, useState } from 'react'
import { BackContainer, BackText, Boto, Container, Linear, Title } from './styles'
import AppLoading from 'expo-app-loading'
import {AntDesign as Icon} from '@expo/vector-icons'

import { Alert, Image, ScrollView } from 'react-native'

import Logo from '../../assets/Logo.png'
import { Fonts } from '../utils'
import Button from '../../components/Button'
import Input from '../../components/Input'
import api from '../../services/api'
import { useNavigation } from '@react-navigation/native'

const SingUp: React.FC = () => {
    const [name, setName] = useState('')
    const [email, setMail] = useState('')
    const [telefone, seTelefone] = useState<any>()
    const [password, setPassword] = useState('')

    const navigate = useNavigation()


    async function handleSignUp () {
        try {
            await api.post('user', {
                name,
                email,
                telefone,
                password,
                provider: true,
            }).then((res) => console.log(res))

            Alert.alert('Cadastro realizado com sucesso', 
            'Você já pode fazer login na aplicação')
            
            navigate.navigate('SignIn')

        } catch (err) {
            console.log(err)
            Alert.alert('Error', 'ocorreu um erro ao fazer o cadastro')
        }
        
    }
    
    console.log(name, email, telefone, password)

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
                // contentContainerStyle={{flex: 1}}

           >
                <Container>
                    <Image source={Logo} />
                    <Title style={{fontFamily: 'MontBold'}} >Criar uma conta</Title>  
                        <Input 
                            name='name' icon='user' 
                            placeholder='Nome' 
                            style={{fontFamily: 'MontBold'}} 
                            onChangeText={(name) => setName(name)}
                            value={name}
                            
                        />
                        <Input 
                            name='mail' icon='mail' 
                            placeholder='E-mail' 
                            style={{fontFamily: 'MontBold'}}
                            onChangeText={(email) => setMail(email)} 
                            value={email}
                            keyboardType='email-address'
                        />
                        <Input 
                            name='Telefone' icon='mobile1' 
                            placeholder='Telefone / celular' 
                            style={{fontFamily: 'MontBold'}}
                            keyboardType='numeric'
                            
                            onChangeText={(telefone) => seTelefone(telefone)}
                            value={telefone}
                        />
                        <Input 
                            name='password' icon='lock' 
                            placeholder='Senha' 
                            style={{fontFamily: 'MontBold'}} 
                            keyboardType='default'

                            onChangeText={(tex) => setPassword(tex)}
                            value={password}
                        />
                        
                        <Button onPress={() => handleSignUp()} >Entrar</Button>
                        <Boto />
                </Container>
            </ScrollView>
            <BackContainer onPress={() => navigate.goBack()}>
                <Icon name='back' color='#999999' size={20} />
                <BackText>Voltar para login</BackText>
            </BackContainer>
        </Linear>
    )
   
}

export default SingUp