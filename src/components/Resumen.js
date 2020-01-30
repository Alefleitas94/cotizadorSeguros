import React from 'react';
import {ContenedorResumen} from '../styled-emotion/se_resumen';
import {primerMayuscula} from '../helpers/helper'
import PropTypes from 'prop-types';

const Resumen = ({datos}) => {

    //extraer datos

    const {marca, year, plan} = datos;

    if (marca === '' || year === '' || plan === '') return null;

    return (
            
            <ContenedorResumen>
                <h2>Resumen de Cotizacion</h2>
                <ul>
                    <li>Marca: {primerMayuscula (marca)} </li>
                    <li>Plan: {primerMayuscula (plan)} </li>
                    <li>Año: {primerMayuscula (year)}  </li>
                </ul>
            </ContenedorResumen>
    )
}

Resumen.propTypes = {

    datos : PropTypes.object.isRequired
}

export default Resumen;
