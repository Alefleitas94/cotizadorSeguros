import React, {useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner'
import {Contenedor, ContenedorFormulario} from './styled-emotion/se_app';


function App() {

  const [resumen, guardarResumen] = useState({
      cotizacion : 0,
      datos: {
          marca: '',
          year: '',
          plan: ''
      }
  })
    
  const [cargando, guardarCargando] = useState (false)

  const {cotizacion ,datos} = resumen;

  return (
    
    <Contenedor>
        <Header
            titulo= "Cotizador de Seguros"
        />
        <ContenedorFormulario>
            <Formulario
                guardarResumen = {guardarResumen}
                guardarCargando = {guardarCargando}
            />
            {cargando ? <Spinner/>: null}
           
            <Resumen
                datos = {datos}  
            />

            {!cargando ? 
            <Resultado
                cotizacion = {cotizacion}

            />: null
            
            }

        </ContenedorFormulario>
    </Contenedor>


  );

}

export default App;
