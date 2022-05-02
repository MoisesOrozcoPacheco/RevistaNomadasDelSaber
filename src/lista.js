import React, { useState } from "react";
import { elemento } from "./elemento";
import './lista.css'

const Informacion = [
    {text: '¿Quiénes somos?'},
    {text: 'Directiva'},
    {text: 'Escritores y Editores'},
    {text: 'Deseo colaborar'}
]

function Lista() {

    const [muestra,SetMuestra] = useState('ListaOculta');

    return(
        <React.Fragment>
            <h1>holita de mar</h1>
             <button class="navegacion" onMouseOver={() => SetMuestra('ListaMuestra')} onMouseOut={()=>SetMuestra('ListaOculta')}> <b>Información </b>
                <ul id="Lista" className={muestra}>
                    {opciones.map(informacion =>(<elemento text="Informacion.text"></elemento>))}
                </ul>
            </button>
        </React.Fragment>
    );
}


//      
             <il> <button class="elemento">¿Quiénes somos?</button></il>
//<il> <button class="elemento">Directiva</button></il>
//<il> <button class="elemento">Escritores y Editores</button></il>
//<il> <button class="elemento">Contacto</button></il>
export {Lista}