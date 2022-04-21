import React from "react";
import { createContext, useState } from "react";

const CarritoContext = createContext()

export const CarritoContextProvider = ({children}) => {
    
    const [cart, setcart] = useState([])

    const AgregarProducto = (addProduct) => {

        setcart([...cart, addProduct])

    }

    const ContadorObjetos = () => {
        let count = 0

        cart.forEach(p => {
            count += p.ContadorObjetos
        })

        return count
    }

    return(
        <CarritoContextProvider value={{cart, AgregarProducto, ContadorObjetos}}>
            {children}
        </CarritoContextProvider>    
    )
}

export default CarritoContext


