import AppLoading from 'expo-app-loading'
import React from 'react'
import { TextInputProps } from 'react-native'
import { Fonts } from '../../pages/utils'
import { Container, TextInput, Icon } from './styles'

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
            <Icon name={icon} size={20} color='#999999' />
            <TextInput placeholderTextColor="#999999" {...rest} />
        </Container>
    )
}

export default Input