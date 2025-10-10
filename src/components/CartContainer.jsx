import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import ListGroup  from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function CartContainer() {
    const { cart, getTotal, deleteItem, clearCart } = useContext(CartContext); 
    const total = getTotal();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className='text-center mt-5'> 
                <h2>No hay productos en el carrito 🫤</h2>
                <Button className='mt-3' onClick={() => navigate('/')}>Volver a la tienda</Button>
            </div>
        )
    }

    return (
        <div className='d-flex flex-column mt-5 align-items-center justify-content-center'>
            <h1 className='mb-4'>Tu Carrito de Compras</h1>
            <ListGroup className='w-50 mb-3'>
                {cart.map(item => (
                    <ListGroup.Item key={item.id} className='d-flex justify-content-between align-items-center'>
                        {/* Muestra el nombre y cantidad */}
                        <p className='my-0'>
                            {item.name} x {item.count} (${item.price * item.count})
                        </p>
                        
                        <Button 
                            variant="danger" 
                            size="sm"
                            onClick={() => deleteItem(item.id)}
                        >
                            Eliminar
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            
            <Button variant="outline-danger" className='w-50 mb-4' onClick={clearCart}>Vaciar Carrito</Button>
            
            <h2 className='mt-3'>Total: ${total}</h2>
            <Button className= 'w-50 mt-5' onClick={() => navigate('/checkout')}>Finalizar compra</Button>
        </div>
    )
}
export default CartContainer;