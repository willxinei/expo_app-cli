import styled from 'styled-components/native'
import {LinearGradient } from 'expo-linear-gradient'
import { RectButton } from 'react-native-gesture-handler'

export const Linear = styled(LinearGradient)`
    flex: 1;
`

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 25px;
`

export const Title = styled.Text`
    margin-top: 20px;
`

export const CreateAccountContainer = styled(RectButton)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background: #f2f2f2;
    border-top-width: 2px;
    border-color: #d0d0d0;
    padding: 16px;
`

export const AccountText = styled.Text`
    font-size: 20px;
    margin-left: 10px;
`

export const ContainerInput = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 52px;
    border-width: 2px;
    border-color: #909090;

    margin-top: 10px;

    background: #f2f2f2;
    border-radius: 12px;
    padding: 0 15px;

`

export const TextInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    margin-left: 20px;
`
