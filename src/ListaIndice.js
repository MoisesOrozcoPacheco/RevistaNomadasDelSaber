import React from "react";
import { useState } from "react";
import { Lista } from "./lista";
import { OpcionesApartados } from "./Datos";
import './lista.css'
    

function ListaIndice(props) {

    const [muestra,SetMuestra] = useState('ListaOculta');

    return (
        <React.Fragment>
            <il>
                <button className="navegacion" onMouseOver={() => SetMuestra('ListaMuestra')} onMouseOut={()=>SetMuestra('ListaOculta')}> <b>{props.text}</b> </button>
                <Lista clase={muestra}></Lista>
            </il>
        </React.Fragment>
    )

}

export {ListaIndice}