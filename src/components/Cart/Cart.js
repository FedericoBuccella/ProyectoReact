import './Cart.css'
import { useContext } from "react";
import CarritoContext from "../../CartContext/CartContext";


const Cart = () => {

    const { cart, removeItem, CalculoTotal} = useContext(CarritoContext)

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
                                <button className=" btn" onClick={() => removeItem(prod.id)}>
                                    <img className='cesto' src='./images/cesto.png' alt='cesto'></img>
                                </button>
                            </tr>
                            )}
                </tbody>
            </table>
            <h6 className='btn btn-danger'>
                Total: ${CalculoTotal()}
            </h6>
            <h6 onClick={() => {
                console.log("Usted debe abonar $" + CalculoTotal())
            }} className='btn btn-success'>
                        Finalizar compra
            </h6>
        </div>
    );
};
export default Cart;