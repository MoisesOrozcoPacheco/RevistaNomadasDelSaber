import React, { useState } from "react";
import { Elemento } from "./elemento";
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
             <button className="navegacion" onMouseOver={() => SetMuestra('ListaMuestra')} onMouseOut={()=>SetMuestra('ListaOculta')}> <b>Información </b>
                <ul id="Lista" className={muestra}>
                    {Informacion.map(Opcion => (<Elemento key={Informacion.text} text={Opcion.text}></Elemento>))}
                </ul>
            </button>
        </React.Fragment>
    );
}


//<il> <button class="elemento">¿Quiénes somos?</button></il>
//<il> <button class="elemento">Directiva</button></il>
//<il> <button class="elemento">Escritores y Editores</button></il>
//<il> <button class="elemento">Contacto</button></il>
export {Lista}