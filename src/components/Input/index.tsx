import AppLoading from 'expo-app-loading'
import React from 'react'
import { TextInputProps } from 'react-native'
import { Fonts } from '../../pages/utils'
import { Container, TextInput } from './styles'
import {AntDesign as Icon} from '@expo/vector-icons'

interface InputProps extends TextInputProps {
    name: string
    icon: string
}
const Input: React.FC<InputProps> = ({name, icon, ...rest}) => {
    const loadFonts = Fonts()

    if (!loadFonts) {
        return ( <AppLoading />)
    }

    return (
        <Container>
            <Icon name='camera' />
            <TextInput placeholderTextColor="#d0d0d0" {...rest} />
        </Container>
    )
}

export default Input