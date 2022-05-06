import React, { useState } from "react";
import { Elemento } from "./elemento";
import { OpcionesApartados } from "./Datos";
import './lista.css'

function Lista({clase,item}) {
    console.log("Opcion item",OpcionesApartados[1], item)

    return(
        <React.Fragment>      
                <ul id="Lista" className={clase}>
                    {OpcionesApartados[item].map(OpcionApar =>(<Elemento key={OpcionApar.text} text={OpcionApar.text}></Elemento>))}
                </ul>
        </React.Fragment>
    );
}

export {Lista}