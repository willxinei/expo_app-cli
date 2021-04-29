import { useNavigation } from '@react-navigation/core'
import AppLoading from 'expo-app-loading'
import React, { useCallback, useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useAuth } from '../../hooks/AuthContext'
import api from '../../services/api'
import { Fonts } from '../utils'
import { format, getDate, getMonth, getYear } from 'date-fns'
import prBr from 'date-fns/locale/pt-BR'
import { 
   AvatarContainer, 
   AvatarImage, 
   BoxFirst, 
   Container, 
   ContainerBody, 
   ContainerText, 
   DateText, 
   Descript, 
   FootContainer, 
   Header, 
   HeaderTitle, 
   Iconcontainer, 
   Linear, 
   NextAppointment, 
   ProfileButton, 
   ServiceContainer, 
   TextName, 
   TextService, 
   UserAvatar, 
   UserName 
} from './styles'
import {Fontisto as Icon, Feather} from '@expo/vector-icons'

export interface Request {
    id: string;
    user_id: string;
    service: string;
    name: string;
    dia: number;
    mes: number;
    ano: number;
    horario: string;
  }

export interface Response {
   ano: number
   mes: number
   dia: number
   from: string
   service: string
   id: string
   user: {
      avatar_url: string
      name: string

   }
}
  
const DashBoard: React.FC = () => {
   const data = new Date(Date.now())
   const dataFormat = format(data, "EEEE dd/MM/yyyy", { locale: prBr})
   const {user} = useAuth()
   const {navigate} = useNavigation()

   const [response, setResponse] =useState<Response[]>([])

   const navigateToProfile = useCallback(() => {
      navigate('Profile')
   }, [navigate])
   
   const navigateToAgenda = useCallback(() => {
      navigate('Agenda')
   }, [navigate])

   const dia = getDate(data)
   const mes = getMonth(data) + 1
   const ano = getYear(data)
   console.log(response.map((h) => {
      return h.user.avatar_url
   }))
   useEffect(() => {
      api.get('appointment/ag/me', {
         params: {
            dia,
            mes,
            ano
         }
      }).then((res) => setResponse(res.data))
   }, [])

   const fonstsLoadd = Fonts()
   if (!fonstsLoadd){
       return <AppLoading />
   }


   return (
      
         <Container
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0.2, 1]}
            colors={['#E4C6D5', '#EAEAEA' ]}>
            <Header>
               <Linear
               start={{x: 1, y: 1}}
               end={{x: 0, y: 1}}
               colors={['#f4b7b7', '#bf4e8a']}>
               <HeaderTitle style={{fontFamily: 'MontRegular'}}>
                  Bem vindo, {'\n'}
                  <UserName style={{fontFamily: 'MontBold'}}>{user.name}</UserName>
               </HeaderTitle>
      
               <ProfileButton onPress={navigateToProfile}>
                  <UserAvatar
                     source={{
                     uri: `${user.avatar_url}`,
                     }}
                  />
               </ProfileButton>
               </Linear>
            </Header>
            <ContainerBody>
               <DateText style={{fontFamily: 'MontRegular'}} >{dataFormat}</DateText>
               <NextAppointment style={{fontFamily: 'MontBold'}} >Proximo Atendimento</NextAppointment>
               
               <ServiceContainer 

                  data={response}
                  keyExtractor={(id) => id.id}
                  renderItem={({item: list}) => (
                     <BoxFirst>
                        <AvatarContainer>
                           <AvatarImage source={{uri: `${list.user.avatar_url}`}} />
                        </AvatarContainer>

                        <ContainerText>
                           <TextName style={{fontFamily: 'MontBold'}} >{list.user.name}</TextName>
                           <TextService style={{fontFamily: 'MontRegular'}} >Service: {list.service}</TextService>
                           <TextService style={{fontFamily: 'MontRegular'}} >hora: {list.from}</TextService>
                        </ContainerText>
                     </BoxFirst>
                  )}
               />
            </ContainerBody>
            <FootContainer>
               <Iconcontainer onPress={navigateToAgenda}>
                  <Icon name='date' size={40} color="#f2f2f2" />
                  <Descript style={{fontFamily: 'MontRegular'}} >Minha agenda</Descript>
               </Iconcontainer>
               <Iconcontainer>
                  <Feather name='clipboard' size={40} color="#f2f2f2" />
                  <Descript style={{fontFamily: 'MontRegular'}} >Criar um serviço</Descript>
               </Iconcontainer>
               <Iconcontainer>
                  <Feather name="x-square" size={40} color="#f2f2f2" />
                  <Descript style={{fontFamily: 'MontRegular'}} >Criar um serviço</Descript>
               </Iconcontainer>
            </FootContainer>
         </Container>
   )
    
}

export default DashBoard