import React from 'react';
import {Mensaje, TextoCotizacion, ResultadoCotizacion} from '../styled-emotion/se_resultado';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Resultado = ({cotizacion}) => {

    return (
        (cotizacion === 0) ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> : 
       ( 
       <ResultadoCotizacion>
       <TransitionGroup
            component = "p"
            className="resultado"
       >
           <CSSTransition
            classNames="resultado"
            key = {cotizacion}
            timeout= {{enter: 700 , exit: 700}}
           
           >
             <TextoCotizacion>El total es: ${cotizacion} </TextoCotizacion>
           </CSSTransition>
       </TransitionGroup>
       </ResultadoCotizacion>
       )
    )
}

export default Resultado;
