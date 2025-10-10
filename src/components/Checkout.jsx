import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useState } from 'react'; 
import { CartContext } from '../context/CartContext';
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from '../firebase/db';
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const [formError, setFormError] = useState('');

    const { getTotal, cart, clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError(''); 

        const elements = e.target.elements;
        const email = elements.email.value.trim();
        const name = elements.name.value.trim();
        const phone = elements.phone.value.trim();
        const address = elements.address.value.trim(); 

        if (!email || !name || !phone || !address) {
            setFormError('Por favor, complete todos los campos obligatorios para continuar.');
            return;
        }

        const order = {
            buyer: { email, name, phone, address }, 
            total: getTotal(),
            items: cart.map(item => ({ 
                id: item.id, 
                name: item.name, 
                price: item.price, 
                count: item.count 
            })), 
            date: serverTimestamp(),
        };

        const orderId = await createOrder(order);

        if (orderId) {
            clearCart();

            navigate(`/order/${orderId}`); 
        }
    };

    if (!cart.length) {
        return <div className='text-center mt-5'>No hay productos en el carrito 🫤 </div>;
    }
    
    return (
        <div className='d-flex justify-content-center mt-5'>
            <Form onSubmit={handleSubmit} className="w-50">
                <h1 className='mb-4 text-center'>Finalizar Compra</h1>

                {formError && <p className="text-danger text-center mb-3">{formError}</p>}
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Dirección de Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su email" name="email" required />
                    <Form.Text className="text-muted">
                        Nunca compartiremos su email con nadie más.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" name="name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su teléfono" name="phone" required />
                </Form.Group>

                <Form.Group className="mb-4" controlId="address">
                    <Form.Label>Dirección de Envío</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su dirección" name="address" required />
                </Form.Group>
                

                <Button variant="dark" type="submit" className='w-100'>
                    Finalizar compra 🥳
                </Button>
            </Form>
        </div>
    );
}

export default Checkout;