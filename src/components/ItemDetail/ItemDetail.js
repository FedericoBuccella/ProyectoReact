import { useState } from "react";


const ItemDetail = ({name, category, price, img}) => {
    

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
            </div>
        </div>
        
    );
};

export default ItemDetail;