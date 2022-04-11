import { useEffect, useState } from "react";
import { getProductsById } from "../../AsyncMock";
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const [Item,setItem] = useState(null)

    const [loading, setloading] = useState(true)

    useEffect(() => {

        setloading(true)

        getProductsById().then((res) => {

            setItem(res)

        })
        .finally(() => { 
            setloading(false)
        })
    },[])

    return (
        <div>
            {
            loading 
            ?
                <h1>
                    Cargando...
                </h1>:
                <ItemDetail {...Item} /> 
            }
        </div>
    );
};

export default ItemDetailContainer;