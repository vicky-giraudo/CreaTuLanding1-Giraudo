import CartWidget from './CartWidget.jsx';

const CATEGORIES = ['De pie', 'De techo', 'De escritorio'];

function NavBar() {
return (
    <header className="navbar" role="banner">
    <a href="#" className="brand" aria-label="Inicio - Básico iluminación">
        <h1 className="brand-title">Básico iluminación</h1>
    </a>

    <nav className="nav-links" aria-label="Categorías de productos" role="navigation">
        <ul>
        {CATEGORIES.map(function (cat) {
            return (
            <li key={cat} className="nav-item">
                <a href="#" className="nav-link">{cat}</a>
            </li>
            );
        })}
        </ul>
    </nav>

    <div className="cart-area">
        <CartWidget />
    </div>
    </header>
);
}

export default NavBar;

