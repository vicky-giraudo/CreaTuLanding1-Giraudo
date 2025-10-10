import { useState } from 'react';
import Button from 'react-bootstrap/Button';
function Counter({ stock, onAdd }) { 
    const initialCount = stock > 0 ? 1 : 0;
    const [count, setCount] = useState(initialCount);
    
    if (!stock || stock === 0) {
        return <p className="text-danger">Producto sin stock.</p>;
    }

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
    
    const handleSub = () => {
        if (count > 1) { 
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        if (count > 0) {
            onAdd(count); 
        }
    };

    return (
        <div className='d-flex align-items-center gap-2'>
            <Button onClick={handleSub} variant='danger' disabled={count === 1}>-</Button>
            <p className='my-0 mx-2 fs-5'> {count} </p>
            <Button onClick={handleAdd} variant='success' disabled={count === stock}>+</Button>
            
            <Button 
                onClick={handleAddToCart} 
                disabled={count === 0}
                className='ms-4'
            >
                Agregar al carrito
            </Button> 
        </div>
    );
}
export default Counter;