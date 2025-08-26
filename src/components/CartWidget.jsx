function CartWidget() {
return (
    <button className="cart-btn" aria-label="Carrito de compras">
    <span aria-hidden="true">🛒</span>
    <span className="badge" aria-label="4 artículos en el carrito">4</span>
    </button>
);
}

export default CartWidget;
