import './Cart.css'
import { useContext, useState } from "react";
import CarritoContext from "../../CartContext/CartContext";
import { Link } from 'react-router-dom';
import { firestoreDb } from '../../service/firebase/index';
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore';


const Cart = () => {

    const [loading, setLoading] = useState(false)

    const { cart, clearCart, removeItem, CalculoTotal} = useContext(CarritoContext)

    const createOrder = () => {

        setLoading(true)

        const objOrder = {
            items: cart,
            buyer: {
                name: "Federico Buccella",
                phone: 123456,
                email: "fedec.fb@gmail.com"
            },
            total: CalculoTotal(),
            date: new Date()
        }
        
        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)
        const collectionRef = collection(firestoreDb, 'Products')
        const outOfStock = []

        getDocs(query(collectionRef,where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    
                    const dataDoc = doc.data()
                    const prodCantidad = cart.find(prod => prod.id === doc.id)?.Cantidad

                    if(dataDoc.stock >= prodCantidad){
                        batch.update(doc.ref, {stock: dataDoc.stock - prodCantidad})
                    }else {
                        outOfStock.push({id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0){
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({name: 'outOfStockError', products: outOfStock})
                }
            }).then(({id}) => {
                batch.commit()
                console.log(`El id de la orden es ${id}`)
            }).catch(error => {
                console.log(error)
            }).finally(()=>{
                setTimeout(() => {
                    setLoading(false)  
                }, 2000);
                
            })
    }   
        if(loading){
            return <h1>Espere... Su orden esta siendo generada</h1>   
        }
    
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
                <button /* onClick={} */ className='btn btn-success'>
                            Finalizar compra
                </button>
                <button onClick={()=>{
                    createOrder(); clearCart()
                }} className='btn btn-success'>
                            Generar una order
                </button>
            </div>    
        </div>
    );
};
export default Cart;