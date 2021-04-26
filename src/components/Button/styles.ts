import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { Colors } from '../../pages/utils'

export const Container = styled(RectButton)`
    width: 60%;
    height: 42px;
    background: ${Colors.rosa};

    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border-radius: 12px;
`

export const TitleButton = styled.Text`
    font-size: 18px;
`