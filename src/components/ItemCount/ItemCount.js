import { useState, useEffect } from "react";
import './ItemCount.css';

const ItemCount = ({onConfirm, initial, stock}) => {

    const [count, setCount] = useState(initial)

    useEffect(() => {
        console.log('Se ejecuto el montaje del contador')

        let Activate = true;

        setTimeout(() =>{
            if(Activate){
                setCount(initial)
            }
            
        })
    },[initial])

    useEffect(()=>{
        console.log('El contenido del contador cambio')
    },[count])

    const increment = () => {
        if(count < stock){
            setCount (count + 1)
        }else {
            console.log('La cantidad de stock requerido es insuficiente')
        }
    }

    const decrement = () => {
        if(count > 0){
            setCount (count - 1)
        }else{
            console.log('Error')
        }
    }

  /*   const agregar = () => {
        console.log('Se agregaron ' ,count, 'Productos a su carrito de compra' )
        setTimeout(()=>{
            setCount(initial)
        },2000)
    } */

    return(
        <section className="container-fluid Principal">
            <div className="Contador">
                <button type="button" className="btn btn-outline-primary" onClick={decrement}>-</button>
                <p className="p-2"> {count} </p>
                <button type="button" className="btn btn-outline-primary" onClick={increment}>+</button>
            </div>
            <div>
                <button type="button" className="btn btn-outline-primary" onClick={() => onConfirm(count)}>Agregar al carrito</button>
            </div>
        </section>
    )
}

export default ItemCount