# AMAVI E-commerce 💎

**Joyería Artesanal Única**  
Piezas únicas para acompañarte en tu día a día.

Este proyecto es el desarrollo **Front-End** de una **Single Page Application (SPA)** de e-commerce de joyería, construido como **Proyecto Final** del curso de React JS.  
La aplicación permite a los usuarios navegar por el catálogo, filtrar por categorías, ver detalles de los productos, gestionarlos en un carrito de compras y finalizar la transacción.

---

## 🛠️ Tecnologías y Librerías

El proyecto está construido bajo el ecosistema de **React** y **Vite**, utilizando las siguientes herramientas principales:

| Categoría          | Herramienta          | Uso Principal                                                      |
|-------------------|-------------------|-------------------------------------------------------------------|
| Framework          | React 19          | Componentización de la Interfaz de Usuario                        |
| Build Tool         | Vite              | Entorno de desarrollo rápido y bundling de producción            |
| Estilado           | Bootstrap 5 & react-bootstrap | Diseño responsivo y componentes de UI pre-estilados          |
| Rutas              | React Router DOM 7 | Navegación (SPA) y rutas dinámicas                                |
| Base de Datos      | Firebase/Firestore | Persistencia del catálogo de productos y almacenamiento de órdenes de compra |
| Utilidades         | react-hot-toast   | Notificaciones flotantes (toasts) para acciones del carrito      |
| Gestor de Paquetes | npm               | Gestión de dependencias                                           |

---

## 🚀 Funcionalidades Principales

### Catálogo Dinámico
- Muestra un listado de productos obtenidos desde Firestore.
- Filtra dinámicamente el listado por categorías usando la URL: `/category/:id`.

### Vista de Detalle (`ItemDetailContainer`)
- Muestra la información completa de un producto específico, incluyendo un contador para seleccionar la cantidad.
- Los datos se obtienen desde Firebase mediante la ruta dinámica: `/item/:id`.

### Carrito de Compras (`CartContext`)
- Manejo de estado global del carrito con **Context Provider**.
- Funcionalidades: `addToCart`, `deleteItem`, `clearCart`.
- Cálculo dinámico de cantidad total y precio final.

### Checkout y Orden de Compra
- Formulario de cliente con validación de campos obligatorios.
- Generación de un documento de orden en la colección `orders` de Firestore al finalizar la compra.

### Confirmación de Orden
- Al completar la compra, el usuario es redirigido a la ruta `/order/:id` mostrando el **ID único** generado por Firebase, completando la experiencia post-compra.

---

## 👤 Autor

**Victoria Giraudo**  
Estudiante del curso de React JS

