import Item from '../Item/Item'


const ItemList = ({products}) => {
    return (
        <div className='d-flex flex-flow justify-content-around align-items-center'>
            {products.map ( prod => <Item key={prod.id} {...prod} />)}
        </div>
    );
};

export default ItemList;