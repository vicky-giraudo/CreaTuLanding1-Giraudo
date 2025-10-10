import React, { createContext, useState, useMemo } from 'react';

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);
const isInCart = (id) => {
        return cart.some(item => item.id === id);
    };

const addItem = (item, quantity) => {
const newItem = { ...item, quantity };
        if (isInCart(item.id)) {
            const updatedCart = cart.map(product => {
                if (product.id === item.id) {
                    return { ...product, quantity: product.quantity + quantity };
                }
                return product;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, newItem]);
        }
    };
const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
    };
const clearCart = () => {
        setCart([]);
    };
const totalPrice = useMemo(() => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }, [cart]);
const totalItemsInCart = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }, [cart]);
const contextValue = {
        cart,
        totalPrice,
        totalItemsInCart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
    };
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};