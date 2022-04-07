import { Card } from "react-bootstrap";

const Item = ({name, img}) => {
    return (
        <section>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <div>
                    <button className="btn btn-primary">Ver detalle</button>
                </div>
            </Card>
        </section>
    );
};

export default Item;