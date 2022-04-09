import { Card } from "react-bootstrap";

const Item = ({name, img}) => {
    return (
        <section>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div>
                        <button variant="primary">Ver Detalles</button>
                    </div>
                </Card.Body>
            </Card>
        </section>
    );
};

export default Item;