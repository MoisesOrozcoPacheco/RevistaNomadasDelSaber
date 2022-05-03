import React, { useState } from "react";
import { Elemento } from "./elemento";
import { OpcionesApartados } from "./Datos";
import './lista.css'

function Lista(props) {


    return(
        <React.Fragment>      
                <ul id="Lista" className={props.clase}>
                 {OpcionesApartados.map(OpcionApar =>(<Elemento key={OpcionesApartados.text} text={OpcionApar.text}></Elemento>))};
                </ul>
        </React.Fragment>
    );
}

export {Lista}