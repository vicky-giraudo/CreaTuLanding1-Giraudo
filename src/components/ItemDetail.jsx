import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Counter from './Counter';
import { useContext, useCallback } from 'react'; 
import { CartContext } from '../context/CartContext';

function ItemDetail({ item }) {
    const { addToCart } = useContext(CartContext); 

    if (!item) return <p className="text-center mt-5">Cargando producto...</p>;
    const handleAdd = useCallback((count) => {
        const itemToAdd = {
            ...item,
            count: count,
        };
        addToCart(itemToAdd);
    }, [item, addToCart]);

    return (
        <Container className='mt-5'>
            <Row>
                <Col> 
                    <Image 
                        src={item.image || "https://via.placeholder.com/400"} 
                        style={{height:400, objectFit: "cover"}} 
                    />
                </Col>
                <Col>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <h3>${item.price}</h3>
                    <Counter stock={item.stock} onAdd={handleAdd} /> 
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetail;