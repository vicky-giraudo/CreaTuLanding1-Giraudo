import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

export default function CartWidget({ count = 0, onClick }) {
return (
    <Button variant="light" onClick={onClick} aria-label={`Abrir carrito, ${count} productos`}>
    🛒 <Badge bg="dark" pill className="ms-1">{count}</Badge>
    <span className="visually-hidden">productos en el carrito</span>
    </Button>
)
}