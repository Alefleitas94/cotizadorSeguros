import React from 'react';
import {Mensaje, TextoCotizacion, ResultadoCotizacion} from '../styled-emotion/se_resultado';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import PropTypes from 'prop-types';

const Resultado = ({cotizacion}) => {

    return (
        (cotizacion === 0) ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> : 
       ( 
       <ResultadoCotizacion>
       <TransitionGroup
            component = "span"
            className="resultado"
       >
           <CSSTransition
            classNames="resultado"
            key = {cotizacion}
            timeout= {{enter: 700 , exit: 700}}
           
           >
             <TextoCotizacion>El total es: <span>${cotizacion}</span></TextoCotizacion>
           </CSSTransition>
       </TransitionGroup>
       </ResultadoCotizacion>
       )
    )
}

Resultado.propTypes = {
    cotizacion : PropTypes.number.isRequired

}

export default Resultado;
