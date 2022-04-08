import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Item = ({name, img}) => {
    return (
        <section>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <div>
                    <Button>Ver Detalle</Button>
                </div>            
            </Card>
        </section>
    );
};

export default Item;