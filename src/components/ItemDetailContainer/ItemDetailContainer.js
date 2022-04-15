import { useEffect, useState } from "react";
import { getProductsById } from "../../AsyncMock";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [Item,setItem] = useState()

    const [loading, setloading] = useState(true)

    const {productId} = useParams()

    useEffect(() => {

        setloading(true)

        getProductsById(productId).then((res) => {

            setItem(res)

        })
        .finally(() => { 
            setloading(false)
        })
    },[productId])

    return (
        <div>
            {
            loading  
            ?
                <h1>
                    Cargando...
                </h1>
            :
                <ItemDetail {...Item} /> 
            }
        </div>
    );
};

export default ItemDetailContainer;