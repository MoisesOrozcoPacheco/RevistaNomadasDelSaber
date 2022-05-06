import React from "react";
import { useState } from "react";
import { Lista } from "./lista";
import { OpcionesApartados } from "./Datos";
import './lista.css'
    

function ListaIndice({text,item}) {

    const [muestra,SetMuestra] = useState('ListaOculta');

    return (
        <React.Fragment>
                <button className="navegacion" onMouseOver={() => SetMuestra('ListaMuestra')} onMouseOut={()=>SetMuestra('ListaOculta')}> <b>{text}</b>
                    <Lista clase={muestra} key={item} item={item}></Lista>
                </button>
    
        </React.Fragment>
    )

}

export {ListaIndice}