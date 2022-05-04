import React, { useState } from "react";
import './lista.css'

function Lista() {

    const [muestra,SetMuestra] = useState('ListaOculta');

    return(
        <React.Fragment>
             <button class="navegacion" onMouseOver={() => SetMuestra('ListaMuestra')} onMouseOut={()=>SetMuestra('ListaOculta')}> <b>Información </b>
                <ul className={muestra}>
                    <il> <button class="elemento">¿Quiénes somos?</button></il>
                    <il> <button class="elemento">Directiva</button></il>
                    <il> <button class="elemento">Escritores y Editores</button></il>
                    <il> <button class="elemento">Contacto</button></il>
                </ul>
            </button>
        </React.Fragment>
    );
}



export {Lista}