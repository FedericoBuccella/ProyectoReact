import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

const ItemDetail = ({name, category, price, img, stock}) => {
    const [Cantidad, setCantidad] = useState(0) 

    const AgregarCarro = (count) => {
        setCantidad(count)
    }
    
    return (

        <div className="container my-5 w-25">
            <div className='card'>
                <img src={img} alt={name}/>
                    <div className='card-body'>
                        <h2 className='card-title text-start'>{name}</h2>
                        <p className='card-text text-start'>{category}</p>
                    </div>
                    <div className='list-group'>
                        <p>Precio: ${price}</p>
                    </div>
                    {Cantidad > 0 ? 
                        <div> <Link className="btn btn-outline-primary" to='/cart'>
                                Ir al carrito 
                            </Link>
                        </div> 
                        : 
                        <ItemCount onConfirm={AgregarCarro} stock={stock} initial={1} />}
            </div>
        </div>
        
    );
};

export default ItemDetail;