import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function Item({ item }) {
    const navigate = useNavigate();

    if (!item) return null;

    return (
        <Col lg={3} md={6} className='mb-4'>
            <Card>
                <Card.Img 
                    variant="top" 
                    src={item.image || "https://via.placeholder.com/300"} 
                    style={{height: 300, objectFit: "cover"}} 
                />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.category}</Card.Text>
                    <Button onClick={() => navigate(`/item/${item.id}`)}>Ver detalle</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Item;
