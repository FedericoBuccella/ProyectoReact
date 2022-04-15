import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({name, category, price, img, stock}) => {
    
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
                    <ItemCount stock={stock} initial={1} />
            </div>
        </div>
        
    );
};

export default ItemDetail;