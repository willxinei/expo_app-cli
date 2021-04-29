import styled from 'styled-components/native';
import {FlatList} from 'react-native'
import {RectButton} from 'react-native-gesture-handler';
import  {LinearGradient } from 'expo-linear-gradient';
import {Request} from './index';
import {Response} from './index'

export const Container = styled(LinearGradient)`
  flex: 1;
`;

export const Header = styled.View`
  width: 105%;

  align-self: center;
  margin-top: -25px;
`;

export const Linear = styled(LinearGradient)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 60px;

  height: 121px;
  overflow: hidden;
  padding: 37.6px 30px;
`;

export const HeaderTitle = styled.Text`
  color: #f3f3f3;
  font-size: 26px;
  line-height: 30px;
  margin-top: 15px;
  margin-left: 20px;
`;

export const UserName = styled.Text`
  color: #8e18ba;
  font-size: 20px;
`;

export const ProfileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 66px;
  height: 66px;
  border-radius: 36px;
  background: white;
  margin-top: 15px;
`;

export const ContainerBody = styled.View`
   flex: 1;
   padding: 0 25px;
`

export const DateText = styled.Text`
   font-size: 20px;
   margin-top: 26px;

`

export const NextAppointment = styled.Text`
   font-size: 24px;
   margin-top: 20px;
`
export const ServiceContainer = styled(
   FlatList as new () => FlatList<Response>
)`
   padding-top: 25px;
`


export const BoxFirst = styled.View`
   height: 140px;
   width: 100%;
   background: #ffffff;
   padding: 15px;
   margin-top: 16px;

   border-radius: 16px;
   flex-direction: row;
   align-items: center;
`
export const AvatarContainer = styled.View`
   width: 30%;
`

export const AvatarImage = styled.Image`
   height: 83px;
   width: 83px;
   border-radius: 40px;
   background: #d0d0d0;
   
`

export const TextName = styled.Text`
   font-size: 26px;
   margin-left: 50px;
`

export const ContainerText = styled.View`
`

export const TextService = styled.Text`
   font-size: 16px;
   margin-left: 15px;
`

export const FootContainer = styled.View`
   flex-direction: row;
   justify-content: space-between;

   padding: 0 25px;
   background: #FF97B2;
   height: 80px;
`

export const Iconcontainer = styled.TouchableOpacity`
   align-items: center;
   justify-content: center;
`

export const Descript = styled.Text`
   font-size: 14px;
   margin-top:7px;
   color: #f2f2f2
`




