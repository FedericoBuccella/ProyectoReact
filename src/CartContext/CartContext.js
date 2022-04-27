import { createContext, useState } from "react";

const CarritoContext = createContext()

export const CarritoContextProvider = ({children}) => {
    
    const [cart, setcart] = useState([])

    console.log(cart)

    const AgregarProducto = (addProduct) => {

        setcart([...cart, addProduct])
    }

    const ContadorObjetos = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.Cantidad
            console.log(count)
        })

        return count
    }

    const CalculoTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += prod.Cantidad * prod.price
            console.log(total)
        })

        return total
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setcart([])
    }

    const removeItem = (id) => {
        const productos = cart.filter(prod => prod.id !== id)
        setcart(productos)
    }

    return(
        <div>
            <CarritoContext.Provider value={{cart, AgregarProducto, ContadorObjetos, isInCart, clearCart, removeItem, CalculoTotal}}>
                {children}
            </CarritoContext.Provider>
        </div>
    )
}

export default CarritoContext


