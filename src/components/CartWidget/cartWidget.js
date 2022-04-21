import  './cartWidget.css'
import { useContext } from 'react';
import CarritoContext from '../../CartContext/CartContext';

const CartWidget = () => {

    const { ContadorObjetos, clearCart } = useContext(CarritoContext)
    
    return(
        <div className="CartWidget">
            <img src="./images/cart.png" alt='carrito' style={{width: 40, marginRight: 10}} />
            {ContadorObjetos()}
            <button className='btn btn-primary' onClick={clearCart}>Borrar carrito</button>
        </div>
    )
}

export default CartWidget;