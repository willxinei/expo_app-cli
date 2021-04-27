import styled from 'styled-components/native'
import {LinearGradient } from 'expo-linear-gradient'

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

export const CreateAccountContainer = styled.TouchableOpacity`
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

export const AccountText = styled.Text``