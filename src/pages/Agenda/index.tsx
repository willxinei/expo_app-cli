import AppLoading from 'expo-app-loading'
import React, { useCallback } from 'react'
import { Fonts } from '../utils'
import { Container, Descript, FootContainer, Iconcontainer, Title } from './styles'
import {Fontisto as Icon, Feather} from '@expo/vector-icons'


const Agenda: React.FC = () => {

   const fonstsLoadd = Fonts()
   if (!fonstsLoadd){
       return <AppLoading />
   }


   const navigateToHome = useCallback(() => {
      console.log('ok')
   }, [])
   
   return (
      <Container>
      </Container>
   )
}

export default Agenda