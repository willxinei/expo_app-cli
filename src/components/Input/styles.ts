import styled from 'styled-components/native'
import {AntDesign as IconD} from '@expo/vector-icons'


export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 42px;

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

export const Icon = styled(IconD)``