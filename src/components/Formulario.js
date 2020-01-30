import React, {useState} from 'react';
import {Campo, Label, Select, InputRadio, Boton, Error} from '../styled-emotion/se_formulario'
import {obtenerDiferenciaYear, calcularMarca, obtenerPlan} from '../helpers/helper'
import PropTypes from 'prop-types';

const Formulario = ({guardarResumen, guardarCargando}) => {

    const [datos, guardarDatos] = useState({
        marca:'',
        year: '',
        plan: ''
    });

    const [error, guardarError] = useState(false)


    //Extraer los valores del state
    const {marca, year, plan} = datos;


    //Leer los datos del formulario y colocarlos en el state
    const obtenerInformacion = e => {
        guardarDatos({
            ...datos,
            [e.target.name]:e.target.value
        })
    }

    //Cuando el usuario presione cotizar
    
    const cotizarSeguro = e => {
        e.preventDefault();

    //Validacion 
    
    if (marca.trim() ==='' || year.trim() ==='' || plan.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);
    
    //Una base de 2000
    let resultado = 2000;

    //Obtener la diferencia en años
    const diferencia = obtenerDiferenciaYear(year);

    // Por cada año hay que restar el 3% 
    resultado -=((diferencia * 3 )*resultado)/100;

    // Americano 15%

    // Asiatico 5%
    //Europeo 30%   
    
    resultado = calcularMarca(marca) * resultado;

    //Basico aumenta 20%
    //Completo 50%
    const incrementoPlan = obtenerPlan(plan)
    
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    guardarCargando (true);

    setTimeout(()=> {

        //Elimina el spinner
        guardarCargando (false);

        //Pasa la informacion al componente principal
        guardarResumen({
            cotizacion: resultado,
            datos
         })    


    }, 3000);

  
  
    
    //Total


    }

    return (
        <form 
            onSubmit = {cotizarSeguro}
        >
            {error ? <Error>Todos los campos son obligatorios</Error> :null }
                <Campo>
                        <Label>Marca </Label>
                        <Select
                            name= "marca"
                            value={marca}
                            onChange= {obtenerInformacion}
                        >
                            <option value="">-- Seleccione --</option>
                            <option value="americano">Americano</option>
                            <option value="europeo">Europeo</option>
                            <option value="asiatico">Asiatico</option>
                        </Select>
                </Campo>

                <Campo>
                        <Label>Año </Label>
                        <Select
                            name= "year"
                            value={year}
                            onChange= {obtenerInformacion}
                        >
                        <option value="">-- Seleccione --</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                        </Select>
                </Campo>

                <Campo>
                    <Label>Plan </Label>
                    
                    <InputRadio
                        type="radio"
                        name="plan"
                        value="basico"
                        checked={plan === "basico"}
                        onChange= {obtenerInformacion}
                    />Basico
                    
                    <InputRadio
                        type="radio"
                        name="plan"
                        value="completo"
                        checked = {plan === "completo"}
                        onChange= {obtenerInformacion}
                    />Completo

                </Campo>
                <Boton type="submit">Cotizar</Boton>
        </form>
    )
};

Formulario.propTypes = {

    guardarResumen = PropTypes.func.isRequired,
    guardarCargando = PropTypes.func.isRequired

};

export default Formulario;
