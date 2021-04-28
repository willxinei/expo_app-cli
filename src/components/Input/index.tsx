import AppLoading from 'expo-app-loading'
import React, { useCallback, useRef, useState } from 'react'
import { TextInputProps } from 'react-native'
import { Fonts } from '../../pages/utils'
import { Container, TextInput, Icon } from './styles'

interface InputProps extends TextInputProps {
    name: string
    icon: string
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => {
    const inputElementRef = useRef<any>(null)

    const [isFocuse, setIsfocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    const handleInputFocu = useCallback(() => {
        setIsfocused(true)
    }, [])

    const loadFonts = Fonts()

    if (!loadFonts) {
        return ( <AppLoading />)
    }

    return (
        <Container isCoused={isFocuse} >
            <Icon name={icon} size={20} color='#999999' />
            <TextInput 
                onFocus={handleInputFocu}
                placeholderTextColor="#999999" 
                {...rest}
            />
        </Container>
    )
}

export default Input