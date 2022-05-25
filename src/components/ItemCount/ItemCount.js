import { useState, useEffect } from "react";
import './ItemCount.css';
import Swal from "sweetalert2";

const ItemCount = ({onConfirm, initial, stock}) => {

    const [count, setCount] = useState(initial)

    useEffect(() => {

        let Activate = true;

        setTimeout(() =>{
            if(Activate){
                setCount(initial)
            }
            
        })
    },[initial])

    const increment = () => {
        if(count < stock){
            setCount (count + 1)
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Este producto no tiene stock...'
              })
        }
    }

    const decrement = () => {
        if(count > 0){
            setCount (count - 1)
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El numero que quiere seleccionar es incorrecto.'
              })
        }
    }

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