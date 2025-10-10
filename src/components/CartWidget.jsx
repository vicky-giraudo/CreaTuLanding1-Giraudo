import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function CartWidget() {
    const { getQuantity } = useContext(CartContext);
    const quantity = getQuantity();
    const navigate = useNavigate();
    return (
        <Button variant="dark" onClick={() => navigate('/cart')}>
        🛒 <Badge bg='secondary'>{quantity}</Badge>
        </Button>
    )
};
export default CartWidget;