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
                <button className="navegacion" onMouseOver={() => SetMuestra('ListaMuestra')} onMouseOut={()=>SetMuestra('ListaOculta')}> <b>{props.text}</b>
                    {OpcionesApartados.map(ItemLista =>(<Lista clase={muestra} key={ItemLista} item={ItemLista} ></Lista>))}
                </button>
            </il>
        </React.Fragment>
    )

}

export {ListaIndice}