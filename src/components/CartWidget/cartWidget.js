import  './cartWidget.css'
import { useContext } from 'react';
import CarritoContext from '../../CartContext/CartContext';

const CartWidget = () => {

    const { ContadorObjetos } = useContext(CarritoContext)
    
    return(
        <div className="CartWidget">
            <img src="./images/cart.png" alt='carrito' style={{width: 40, marginRight: 10}} />
            {ContadorObjetos}
        </div>
    )
}

export default CartWidget;