import React from 'react'
import {ContenedorHeader, TextHeader} from '../styled-emotion/se_header'


const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
            <TextHeader>{titulo} </TextHeader>
        </ContenedorHeader>
    )
}

export default Header;

