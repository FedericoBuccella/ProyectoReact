import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({id, name, img}) => {
    return (
        <section>
            <Card style={{ width: '18rem', padding:'10px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <div>
                    <Link className="btn btn-primary" to={`/detail/${id}`}>Ver Detalle</Link>
                </div>            
            </Card>
        </section>
    );
};

export default Item;