import AppLoading from 'expo-app-loading'
import React, { useCallback } from 'react'
import { Fonts } from '../utils'
import { Container, Descript, FootContainer, Iconcontainer, Title } from './styles'
import {Fontisto as Icon, Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'


const Agenda: React.FC = () => {
   const {navigate} = useNavigation()

   const navigateToHome = useCallback(() => {
      navigate('DashBoard')
   }, [])

   const navigateToBlockHour = useCallback(() => {
      console.log('ok')
   }, [])

   const navigateToService = useCallback(() => {
      console.log('ok')
   }, [])

   const fonstsLoadd = Fonts()
   if (!fonstsLoadd){
       return <AppLoading />
   }   
   return (
      <>
         <Container>
            <Title style={{fontFamily: 'MontBold'}} >Minha agenda</Title>
         </Container>
         <FootContainer>
            <Iconcontainer onPress={navigateToHome}>
               <Icon name='home' size={40} color="#f2f2f2" />
               <Descript style={{fontFamily: 'MontRegular'}} >Home</Descript>
            </Iconcontainer>
            <Iconcontainer onPress={navigateToService}>
               <Feather name='clipboard' size={40} color="#f2f2f2" />
               <Descript style={{fontFamily: 'MontRegular'}} >Criar um serviço</Descript>
            </Iconcontainer>
            <Iconcontainer onPress={navigateToBlockHour} >
               <Feather name="x-square" size={40} color="#f2f2f2" />
               <Descript style={{fontFamily: 'MontRegular'}} >Bloquer um horário</Descript>
            </Iconcontainer>
         </FootContainer>
      </>
   )
}

export default Agenda