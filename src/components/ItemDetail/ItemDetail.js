

const ItemDetail = ({Item}) => {
    return (

        <div className="container my-5 w-25">
            <div className='card'>
                <img src={Item.img} alt={titulo}/>
                    <div className='card-body'>
                        <h2 className='card-title text-start'>{Item.name}</h2>
                        <p className='card-text text-start'>{Item.category}</p>
                    </div>
                    <div className='list-group'>
                        <p>Precio: ${Item.price}</p>
                    </div>
            </div>
        </div>
    );
};

export default ItemDetail;