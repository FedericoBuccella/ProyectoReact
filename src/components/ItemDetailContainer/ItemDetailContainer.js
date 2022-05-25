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

        setloading(true)

        getDoc(doc(firestoreDb, 'Products', productid)).then(response => {
            
            const product = {id: response.id, ...response.data()}

            setItem(product)
            
        }).catch(error => {
            console.log(error)
        }).finally(()=>{
            setTimeout(() => {
                setloading(false)
            }, 2000);
        })
    },[productid])

    return (

        <div>
            {
            loading  
            ?
                <div className="spinner-border m-5 text-danger" style={{width: "3rem", height: "3rem"}} role="status">
                    <span className="sr-only"></span>
                </div>
            :
                <ItemDetail {...Item} /> 
            }
        </div>

    );
};

export default ItemDetailContainer;