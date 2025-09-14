import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function CartWidget () {
return (
    <Button variant='light'>
    🛒<Badge bg='dark'>4</Badge>
    </Button>
);
}

export default CartWidget;
