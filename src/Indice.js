import React from 'react'
import { ListaIndice } from './ListaIndice'
import './lista.css'
import { Apartados } from './Datos'


function Indice () {

    return (
        <React.Fragment>
              <div class="headContent"> 
                    {Apartados.map(Boton => (<ListaIndice key={Boton.item} item={Boton.item} text={Boton.text}></ListaIndice>))}     
              </div>
        </React.Fragment>
    );
}

export { Indice };
