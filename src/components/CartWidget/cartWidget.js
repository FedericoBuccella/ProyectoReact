import  './cartWidget.css'
import { useContext } from 'react';
import CarritoContext from '../../CartContext/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { ContadorObjetos } = useContext(CarritoContext)
    
    return(
        <div className="CartWidget">
            <Link to={`/cart`}>

                <img src="../images/cart.png" alt='carrito' style={{width: 40, marginRight: 10}} />

            </Link>
            {ContadorObjetos()}
        </div>
    )
}

export default CartWidget;