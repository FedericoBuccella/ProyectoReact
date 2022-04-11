import { useState, useEffect } from "react";
import { PedirDatos } from "../Datos/Datos";
import ItemDetails from "../ItemDetails/ItemDetails";
import ItemList from "../ItemList/ItemList";

const ItemDetailsContainer = () => {

    const [loading, setLoading] = useState(true)

    const [Item, setItem] = useState([])

    useEffect(() => {

        setLoading(true)

        PedirDatos()
            .then( res =>  {

                setItem(res)

        }).finally(() => {
            setLoading(false)
        })
    },[])

    return (
        <div>{
            loading 
            ?
            <h1>
                Cargando...
            </h1>
            :
            <ItemList {...Item} />}
        </div>
    );
};

export default ItemDetailsContainer;