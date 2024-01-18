import React from 'react'

import "./ItemDetail.css";


const ItemDetail = ({ producto }) => {
    return (
        <div>
            <img className="ima" src={producto.imagen} alt={producto.nombre} />
            <p className= "nom">  {producto.nombre}  </p>
            <p className= "pre"> ${producto.precio} </p>
        </div>
    )
}

export default ItemDetail