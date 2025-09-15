import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function ItemDetail({ item, qty, setQty, onAdd }) {
if (!item) return null
return (
    <section className="container py-4">
    <div className="row g-4">
        <div className="col-12 col-md-6">
        <div className="detail-img-box">
            <img src={item.image} alt={item.title} loading="eager" fetchPriority="high" decoding="async" />
        </div>
        </div>
        <div className="col-12 col-md-6">
        <h2 className="mb-1">{item.title}</h2>
        <p className="text-muted mb-2 text-uppercase">{item.category}</p>
        <p className="fs-4 fw-bold mb-3">${Number(item.price).toLocaleString('es-AR')}</p>
        <p className="mb-4">{item.description}</p>

        <div className="d-flex align-items-center gap-2">
            <button className="btn btn-outline-secondary" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
            <span className="px-3">{qty}</span>
            <button className="btn btn-outline-secondary" onClick={() => setQty(q => q + 1)}>+</button>
            <button className="btn btn-dark ms-2" onClick={() => onAdd(qty, item)}>Agregar al carrito</button>
        </div>

        <div className="mt-4">
            <Link to="/" className="link-dark">← Volver al catálogo</Link>
        </div>
        </div>
    </div>
    </section>
)
}

export default function ItemDetailContainer({ onAdd }) {
const { id } = useParams()
const [item, setItem] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
const [qty, setQty] = useState(1)

useEffect(() => {
    let cancel = false
    async function load() {
    setLoading(true); setError(null)
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        if (!res.ok) throw new Error('Network error')
        const data = await res.json()
        await new Promise(r => setTimeout(r, 400))
        if (!cancel) setItem(data)
    } catch (e) {
        if (!cancel) setError('Producto no encontrado')
    } finally {
        if (!cancel) setLoading(false)
    }
    }
    load()
    return () => { cancel = true }
}, [id])

if (loading) return <div className="container py-4">Cargando…</div>
if (error)   return <div className="container py-4 text-danger">{error}</div>

return <ItemDetail item={item} qty={qty} setQty={setQty} onAdd={onAdd || ((q) => alert(`Agregaste ${q} u.`))} />
}

