import React, { useCallback } from 'react'
import { useAuth } from '../../hooks/AuthContext'
import { Back, Container, Header, Linear, LogOut } from './styles'
import {AntDesign as Icon} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'

const Profile: React.FC = () => {
   const { signOut } = useAuth()
   const {goBack} = useNavigation()

   const handleLogout = useCallback(() => {
      signOut()
   }, [])

   return (
      <Linear colors={['#EAEAEA', '#E4C6D5']}>
         <Container>
            <Header>
               <Back onPress={() => goBack()}>
                  <Icon name='left' size={30} />
               </Back>
               <LogOut onPress={handleLogout}>
                  <Icon name='logout' size={30} />
               </LogOut>
            </Header>
            
         </Container>
      </Linear>
   
   )
}

export default Profile