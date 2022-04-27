import './Cart.css'
import { useContext } from "react";
import CarritoContext from "../../CartContext/CartContext";
import { Link } from 'react-router-dom';


const Cart = () => {

    const { cart, removeItem, CalculoTotal} = useContext(CarritoContext)

    if(cart.length === 0){
        return(
            <div>
                <h1 className='m-5'>
                    Todavia no has agregado productos al carrito
                </h1>
                <Link className='btn btn-primary m-5' to={'/productos'}>
                    Home
                </Link>
            </div>
        )
    }

    return (
        <div>
            <h1>
                Este es el carrito de compras
            </h1>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">SubTotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(prod => 
                            <tr key={prod.id}>
                                <th scope="row"># {prod.id}</th>
                                <td>{prod.name}</td>
                                <td>${prod.price}</td>
                                <td>{prod.Cantidad}</td>
                                <td>${prod.Cantidad * prod.price}</td>
                                <td>
                                    <button className=" btn" onClick={() => removeItem(prod.id)}>
                                        <img className='cesto' src='./images/cesto.png' alt='cesto'></img>
                                    </button>
                                </td>
                            </tr>
                            )}
                </tbody>
            </table>
            <div className='d-flex flex-flow justify-content-evenly align-items-center'>
                <h6 className='total btn-danger'>
                        Total a abonar: ${CalculoTotal()}
                </h6>   
                <h6 /* onClick={} */ className='btn btn-success'>
                            Finalizar compra
                </h6>
            </div>    
        </div>
    );
};
export default Cart;