import { Card } from "react-bootstrap";

const Item = ({name, id, price, category, img}) => {
    return (
        <section>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       {id}
                    </Card.Text>
                    <Card.Text>
                       {category}
                    </Card.Text>
                    <Card.Text>
                       {price}
                    </Card.Text>
                    <div>
                        <button variant="primary">Ver Detalles</button>
                    </div>
                </Card.Body>
            </Card>
        </section>
    );
};

export default Item;