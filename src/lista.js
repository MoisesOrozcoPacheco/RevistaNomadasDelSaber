import React, { useState } from "react";
import { Elemento } from "./elemento";
import { OpcionesApartados } from "./Datos";
import './lista.css'

function Lista(props) {


    return(
        <React.Fragment>      
                <ul id="Lista" className={props.clase}>
                    {props.item.map(OpcionApar =>(<Elemento key={OpcionApar.text} text={OpcionApar.text}></Elemento>))}
                </ul>
        </React.Fragment>
    );
}

export {Lista}