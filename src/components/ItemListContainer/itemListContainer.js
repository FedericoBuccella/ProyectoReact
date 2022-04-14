import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { Products } from "../../AsyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [products,setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        
        const getDatos = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(Products)
            }, 500);
        })

        getDatos.then((res) => {
            setProducts(res)
        
        if(categoryId === 'Productos'){

            setProducts(res)

        }else if(categoryId){

            setProducts( res.filter( (prod) => prod.category === categoryId ) )

          }else{
            setProducts( res );
        }})
    },[categoryId])

    return(
        <div className="Todos"> 
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer