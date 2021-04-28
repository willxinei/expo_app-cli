import styled, { css } from 'styled-components/native'
import {AntDesign as IconD} from '@expo/vector-icons'
import { Colors } from '../../pages/utils'

interface BorderPrps {
    isCoused: boolean
}

export const Container = styled.View<BorderPrps>`
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 42px;
    border-width: 2px;
    border-color: #909090;

    margin-top: 10px;

    background: #f2f2f2;
    border-radius: 12px;
    padding: 0 15px;

    ${(props) =>
        props.isCoused && 
        css `
            border-color: #22B18A;
        `
    }
`

export const TextInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    margin-left: 20px;
`

export const Icon = styled(IconD)``