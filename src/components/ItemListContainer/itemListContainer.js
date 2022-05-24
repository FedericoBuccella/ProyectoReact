import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { collection, getDocs, query, where} from 'firebase/firestore'
import { firestoreDb } from '../../service/firebase'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {

    const [products,setProducts] = useState([])

    const [loading, setloading] = useState(false)

    const {categoryid} = useParams()

    useEffect(() => {
        setloading(true)

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
        }).catch(error => {
            console.log(error)
        }).finally(()=>{
            setloading(false)
        })
    }, [categoryid])

    return(
        <div className="Todos">
            <h3 className='text-decoration-underline text-center fs-2 my-3 '>Todos nuestros productos destacados los podras encontrar aqui:</h3>
            <div>
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer