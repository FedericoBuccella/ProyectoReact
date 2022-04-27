import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { firestoreDb } from "../../service/firebase";

const ItemDetailContainer = () => {

    const [Item,setItem] = useState()

    const [loading, setloading] = useState(false)

    const {productid} = useParams()

    useEffect(() => {

        getDoc(doc(firestoreDb, 'Products', productid)).then(response => {
            console.log(response)
            const product = {id: response.id, ...response.data()}
            setItem(product)
        })
    },[productid])

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