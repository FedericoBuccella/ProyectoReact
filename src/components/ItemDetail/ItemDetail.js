import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import CarritoContext from "../../CartContext/CartContext";

const ItemDetail = ({id, name, category, price, img, stock}) => { 

    const {AgregarProducto, isInCart} = useContext(CarritoContext)

    const AgregarCarro = (count) => {

        const CarritoObj = {
            id,
            name,
            price
        }

        AgregarProducto({...CarritoObj, Cantidad: count})
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
                    {isInCart(id) > 0 
                        ? 
                        <div className="d-flex justify-content-center"> 
                            <Link className="btn btn-outline-primary m-3" to='/cart'>
                                Ir al carrito 
                            </Link>
                            <Link className='btn btn-outline-primary m-3' to={'/productos'}>
                                Home
                            </Link>
                        </div> 
                        : 
                        <ItemCount onConfirm={AgregarCarro} stock={stock} initial={1} />}
            </div>
        </div>
        
    );
};

export default ItemDetail;