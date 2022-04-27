import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { collection, getDocs, query, where} from 'firebase/firestore'
import { firestoreDb } from '../../service/firebase'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {

    const [products,setProducts] = useState([])

    const {categoryid} = useParams()

    useEffect(() => {

        const collectionref = categoryid
            ? query(collection(firestoreDb, 'Products'), where('category', '==', categoryid))
            : query(collection(firestoreDb, 'Products'))

        getDocs( collectionref ).then( response => {
            const products = response.docs.map(doc => {
                return{
                    id: doc.id, ...doc.data()
                }
            })
            setProducts(products)
        })
    }, [categoryid])

    return(
        <div className="Todos"> 
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer