import React, { useState } from "react";
<<<<<<< HEAD
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
=======
import { Elemento } from "./elemento";
import { OpcionesApartados } from "./Datos";
import './lista.css'

function Lista(props) {


    return(
        <React.Fragment>      
                <ul id="Lista" className={props.clase}>
                 {OpcionesApartados.map(OpcionApar =>(<Elemento key={OpcionesApartados.text} text={OpcionApar.text}></Elemento>))};
                </ul>
>>>>>>> a37fd78871105d531d60d0283f78ab1fea5bc0be
        </React.Fragment>
    );
}

<<<<<<< HEAD


=======
>>>>>>> a37fd78871105d531d60d0283f78ab1fea5bc0be
export {Lista}