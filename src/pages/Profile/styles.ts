import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { RectButton } from 'react-native-gesture-handler'

export const Linear = styled(LinearGradient)`
    flex: 1;
`

export const Container = styled.View`
  flex: 1;
  padding: 25px;

`

// Cabeçalho
export const Header = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;

`

export const LogOut = styled.TouchableOpacity`
   
`

export const Back = styled.TouchableOpacity`

`

export const Avatar = styled.Image`
   width: 100px;
   height: 100px;
`

export const Title = styled.View``

