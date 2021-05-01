import React from 'react'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

export function Fonts() {
    const [fontsLoads] = useFonts({
        'MontBlack': require('../../../assets/fonts/MontserratAlternates-Black.ttf'),
        'MontRegular': require('../../../assets/fonts/MontserratAlternates-Regular.ttf'),
        'MontBold': require('../../../assets/fonts/MontserratAlternates-Bold.ttf')
    })

    

    return fontsLoads
}

export const Colors = {
    rosa: '#cd6a96'
}

export function convertHours(time: string) {
    const [hour, minutes] = time.split(':').map(Number);
    const timeInMinutes = hour * 60 + minutes;
    return timeInMinutes;
 }

