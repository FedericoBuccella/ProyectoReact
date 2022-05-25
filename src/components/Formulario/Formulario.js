import { useState, useContext } from 'react'
import CarritoContext from "../../CartContext/CartContext";
import { firestoreDb } from '../../service/firebase/index';
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

export const Formulario = () => {
    let navigate = useNavigate();

    const {cart, CalculoTotal, clearCart} = useContext(CarritoContext)

    const [values, setValues] = useState({

        nombre: '',
        email: '',
        tel: '',
        direccionEnvio: '',

    })

    const handleInputChange = (e) => {
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        
        e.preventDefault()
        const orden = {
            items: cart,
            total: CalculoTotal(),
            comprador: {...values},
            fechaHora: Timestamp.fromDate(new Date())
        }

        const ordersRef = collection(firestoreDb, 'orders')

        addDoc(ordersRef, orden)
            .then((res) => {
                if (values.direccionEnvio !=="" &&
                    values.email !== "" &&
                    values.tel !== "" &&
                    values.nombre !== ""){
                        Swal.fire({
                            title:'Gracias por su compra!',
                            text:'Se enviará el pedido a ' + values.direccionEnvio + ' con una demora de 3 a 5 dias. Porfavor guarde el ID de su envio: ' + res.id,
                            icon:'success',
                        })
                    if (res.id !== undefined){
                        clearCart()
                        navigate("../success", { replace: true });
                    }
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Fijate de cargar bien tus datos personales',
                          })
                    }
            })
    }

    return (

        <div className='container my-5'>
            <h2>Datos del comprador</h2>

            <form onSubmit={handleSubmit}>
                <input 
                    className='form-control my-2'
                    type={'text'}
                    placeholder='Nombre'
                    value={values.nombre}
                    onChange={handleInputChange}
                    name="nombre"
                />

                <input
                className='form-control my-2'
                type={'email'}
                placeholder='email@email.com'
                value={values.email}
                onChange={handleInputChange}
                name="email"
                />

                <input
                className='form-control my-2'
                type={'tel'}
                placeholder='11223344'
                value={values.tel}
                onChange={handleInputChange}
                name="tel"
                />

                <input 
                    className='form-control my-2'
                    type={'text'}
                    placeholder='Direccion de Envío'
                    value={values.direccionEnvio}
                    onChange={handleInputChange}
                    name="direccionEnvio"
                />

                <button to='/productos' className='btn btn-primary' type='submit' >Enviar</button>
            </form>
        </div>
    )
}