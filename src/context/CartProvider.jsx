import { CartContext } from './CartContext';
import { useState } from 'react';
import toast from 'react-hot-toast';

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    
    const addToCart = itemToAdd => {
        const existingItem = cart.find(prod => prod.id === itemToAdd.id);

        if (existingItem) {
            toast.success(`Se agregaron ${itemToAdd.count} unidades más de ${existingItem.name}.`);
            
            const updatedCart = cart.map(item => {
                if (item.id === itemToAdd.id) {
                    return { ...item, count: item.count + itemToAdd.count };
                }
                return item;
            });
            setCart(updatedCart);

        } else {
            toast.success(`Se agregó ${itemToAdd.name} x${itemToAdd.count} al carrito.`);
            setCart([...cart, itemToAdd]);
        }
    }

    const deleteItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        toast.error('Producto eliminado del carrito.');
    }

    const getQuantity = () => {
        const total = cart.reduce((acc, current) => acc + current.count, 0);
        return total;
    }

    const getTotal = () => {
        const total = cart.reduce((acc, current) => acc + (current.count * current.price), 0);
        return total;
    }

    const clearCart = () => {
        setCart([]);
        toast('Carrito vaciado.', { icon: '🗑️' });
    }

    const value = {
        addToCart,
        getQuantity,
        getTotal,
        clearCart,
        cart,
        deleteItem
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;
