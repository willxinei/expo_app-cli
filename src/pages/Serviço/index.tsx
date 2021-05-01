import AppLoading from 'expo-app-loading'
import React, { useCallback, useState } from 'react'
import { Alert, Image, TextInput } from 'react-native'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useAuth } from '../../hooks/AuthContext'
import api from '../../services/api'
import { Fonts } from '../utils'
import { Container, TextTitle, ContainerTexInpu } from './styles'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import Logo from '../../assets/Logo.png'


interface IData {
    provider_id: string
    service: string
    description: string
    time: string
    value: string
}
export const Serviço:React.FC = () => {
    const {user} = useAuth()
    const fontsL = Fonts()
    const navigate = useNavigation()

    const [service, setService] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')
    const [value, setValue] = useState<any>()

    async function handleService () {
        await api.post('service', {
            provider_id: user.id,
            service,
            description,
            value,
            time,
        }).then((res) => console.log(res))

        Alert.alert('Serviço criado com sucesso!')
        navigate.goBack()
    }
    console.log(user.id, service, description)

    if(!fontsL) {
        return ( <AppLoading />)
    }
    return (
        <>
            <Container>
                <Image source={Logo} />
                <TextTitle style={{ fontFamily: 'MontBold'}} >Criar um Serviço</TextTitle>

                <Input 
                    name='service' 
                    icon='' 
                    placeholder='Nome do serivço' 
                    value={service}
                    onChangeText={(service) => setService(service)}
                />
                <ContainerTexInpu>
                    <TextInput
                        placeholder='descriçao do serviço' 
                        onChangeText={(text) => setDescription(text)}
                        numberOfLines={4}
                        style={{flex: 1 }}
                    />
                </ContainerTexInpu>
                <Input 
                    name='time' 
                    icon='' 
                    placeholder='Duraçao do service exp: 01:00h ou 00:30m' 
                    onChangeText={(text) => setTime(text)}
                    keyboardType='default'
                />
                <Input 
                    name='value' 
                    icon='' 
                    placeholder='Valor do serviço' 
                    onChangeText={(text) => setValue(text)}
                    />

                <Button onPress={() => handleService()} >Criar</Button>
            </Container>
        </>
    )
}
