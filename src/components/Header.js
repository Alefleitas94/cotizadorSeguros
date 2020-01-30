import React from 'react'
import {ContenedorHeader, TextHeader} from '../styled-emotion/se_header'
import PropTypes from 'prop-types';


const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
            <TextHeader>{titulo} </TextHeader>
        </ContenedorHeader>
    )
}

Header.propTypes = {

    titulo : PropTypes.string.isRequired
} 

export default Header;

