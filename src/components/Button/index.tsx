import AppLoading from 'expo-app-loading'
import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'
import { Fonts } from '../../pages/utils'
import { Container, TitleButton } from './styles'

interface ButtonProps extends RectButtonProperties {
    children: string
}
const Button: React.FC<ButtonProps> = ({children, ...rest}) => {
    const loadFonts = Fonts()

    if (!loadFonts) {
        return ( <AppLoading />)
    }

    return (
        <Container {...rest} >
            <TitleButton style={{fontFamily: 'MontBlack'}} >{children}</TitleButton>
        </Container>
    )
}

export default Button