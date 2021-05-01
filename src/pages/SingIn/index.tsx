import React, { useCallback, useRef, useState } from 'react'
import { Container, Linear, Title, CreateAccountContainer, AccountText } from './styles'
import AppLoading from 'expo-app-loading'
import {AntDesign as Icon} from '@expo/vector-icons'

import { Image, ScrollView } from 'react-native'

import Logo from '../../assets/Logo.png'
import { Fonts } from '../utils'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useNavigation } from '@react-navigation/core'
import api from '../../services/api'
import { useAuth } from '../../hooks/AuthContext'
import { Boto } from '../SingUp/styles'

interface InputValueRef {
   value: string
}

interface SignInFormData {
   email: string
   password: string
}
 
const SingIn: React.FC = () => {
   const naivgation = useNavigation()
   const {signIn, user} = useAuth()
   console.log(user)

   const [email, setMail] = useState('')
   const [password, setPasswod] = useState('')

   const handleSingUp = useCallback(async() => {
      naivgation.navigate('SignUp')
   }, [])

   console.log(password, email)
   async function handleSignIn() {
      await signIn({
         email,
         password
      })
   }

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
                     name='email' 
                     icon='mail' 
                     placeholder='E-mail' 
                     value={email}
                     onChangeText={(text) => setMail(text) }
                     clearTextOnFocus={true}
                     keyboardType='email-address'
                  />
                  <Input 
                     name='password' 
                     icon='lock' 
                     placeholder='Senha' 
                     value={password}
                     onChangeText={(tex) => setPasswod(tex)}
                  />
                  <Button onPress={() => handleSignIn()} >Entrar</Button>
                  <Boto />
                  <Boto />
               </Container>
         </ScrollView>
         <CreateAccountContainer onPress={handleSingUp} >
               <Icon name='right' color='#999999' size={20} />
               <AccountText style={{fontFamily: 'MontBold'}} >Criar uma conta</AccountText>
         </CreateAccountContainer>

      </Linear>
   )
   
}

export default SingIn