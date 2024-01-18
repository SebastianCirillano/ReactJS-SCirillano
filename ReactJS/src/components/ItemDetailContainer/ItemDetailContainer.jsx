import { useEffect , useState } from "react"
import obtenerProductos from "../../utilidades/data"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { idProducto } = useParams()

    useEffect(() => {

        obtenerProductos
            .then((respuesta) => {
                const productoEncontrado = respuesta.find((productoData) => productoData.id === idProducto)
                setProducto(productoEncontrado)
            })

    }, [])

    return (
        <div className = "item-detail-container">

        <ItemDetail producto={producto} />

        </div>
    )
}

export default ItemDetailContainer