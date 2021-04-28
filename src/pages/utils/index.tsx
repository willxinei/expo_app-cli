import React from 'react'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

export function Fonts() {
    const [fontsLoads] = useFonts({
        'MontBlack': require('../../../assets/fonts/MontserratAlternates-Black.ttf'),
        'MontBold': require('../../../assets/fonts/MontserratAlternates-Bold.ttf')
    })

    

    return fontsLoads
}

export const Colors = {
    rosa: '#cd6a96'
}