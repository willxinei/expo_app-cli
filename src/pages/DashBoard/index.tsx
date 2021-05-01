import { useNavigation } from '@react-navigation/core'
import AppLoading from 'expo-app-loading'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { useAuth } from '../../hooks/AuthContext'
import api from '../../services/api'
import { convertHours, Fonts } from '../utils'
import { format, getDate, getHours, getMonth, getYear, isAfter, isToday } from 'date-fns'
import prBr from 'date-fns/locale/pt-BR'
import { 
   AvatarContainer, 
   AvatarImage, 
   AvatarImag,
   BoxFirst, 
   BoxSecond, 
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
   TextName, 
   TextService, 
   UserAvatar, 
   UserName, 
   BoxText,
   SemAgendamentoContainer
} from './styles'
import {Fontisto as Icon, Feather} from '@expo/vector-icons'
import { parseISO, setMinutes } from 'date-fns/esm'

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

   const [appointment, setAppoitment] = useState<Response[]>([])

   const navigateToProfile = useCallback(() => {
      navigate('Profile')
   }, [navigate])
   
   const navigateToAgenda = useCallback(() => {
      navigate('Agenda')
   }, [navigate])

   const navigateToServiço = useCallback(() => {
      navigate('Serviço')
   }, [navigate])

   const dia = getDate(data)
   const mes = getMonth(data) + 1
   const ano = getYear(data)
   
   useEffect(() => {
      api.get('appointment/ag/me', {
         params: {
            dia,
            mes,
            ano
         }
      }).then((res) => setAppoitment(res.data))
   }, [])

   const nextAgendamento = useMemo(() => {
      return appointment.find((ap) => {
         const hour = convertHours(ap.from) 
         const hourNow = getHours(new Date()) * 60
         return hour > hourNow
      })
   }, [appointment])

   const afterAgendamentos = useMemo(() => {
      return appointment.filter((h) => {
         const nexHour = convertHours(nextAgendamento?.from)
         const hour = convertHours(h.from)
         return hour > nexHour

      })
   }, [])

   console.log(afterAgendamentos)


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
               
               {isToday(data) && nextAgendamento && (
                     <BoxFirst>
                        <AvatarContainer>
                           <AvatarImage source={{uri: `${nextAgendamento?.user.avatar_url}`}} />
                        </AvatarContainer>
                        <ContainerText>
                           <TextName style={{fontFamily: 'MontBold'}} >{nextAgendamento?.user.name}</TextName>
                           <TextService style={{fontFamily: 'MontRegular'}} > <Feather name='clock' size={20} /> Horário: {nextAgendamento.from} hs</TextService>
                           <TextService style={{fontFamily: 'MontRegular'}} > <Feather name='clipboard' size={20} /> Serviço: {nextAgendamento.service}</TextService>
                        </ContainerText>
                     </BoxFirst>
               )}
               {afterAgendamentos.length === 0 && (
                  <SemAgendamentoContainer>
                     <Text style={{
                        fontFamily: 'MontBold',
                        fontSize: 30,
                     }}>Sem horários</Text>
                  </SemAgendamentoContainer>
               )}
               {afterAgendamentos.map(agenda => (
                  <BoxSecond key={agenda.id}> 
                     <Feather name='clock' size={25} />
                     <TextService style={{fontFamily: 'MontBold'}} >{agenda.from}</TextService>
                     <BoxText>
                        <AvatarImag source={{uri: `${agenda.user.avatar_url}`}} />
                        <Text style={{
                           marginLeft: 30,
                           fontSize: 16,
                           fontFamily: 'MontBold'
                        }}>{agenda.user.name}</Text>

                     </BoxText>

                  </BoxSecond>
               ))}
            </ContainerBody>
            <FootContainer>
               <Iconcontainer onPress={navigateToAgenda}>
                  <Icon name='date' size={40} color="#f2f2f2" />
                  <Descript style={{fontFamily: 'MontRegular'}} >Minha agenda</Descript>
               </Iconcontainer>
               <Iconcontainer onPress={navigateToServiço}>
                  <Feather name='clipboard' size={40} color="#f2f2f2" />
                  <Descript style={{fontFamily: 'MontRegular'}} >Criar um serviço</Descript>
               </Iconcontainer>
               <Iconcontainer>
                  <Feather name="x-square" size={40} color="#f2f2f2" />
                  <Descript style={{fontFamily: 'MontRegular'}} >Bloquer um horário</Descript>
               </Iconcontainer>
            </FootContainer>
         </Container>
   )
    
}

export default DashBoard