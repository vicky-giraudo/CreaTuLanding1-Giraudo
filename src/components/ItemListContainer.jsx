// NOTA PERSONAL: PARA LA ENTREGA FINAL MEJORAR LA ESTETICA DE LAS IMAGENES Y QUE SEAN MAS CANTIDAD DE PRODUCTOS!
import { useEffect, useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const SUBCATS = [
{ id: 'anillos',   keywords: ['ring', 'anillo'] },
{ id: 'dijes',     keywords: ['necklace', 'pendant', 'dije', 'charm'] },
{ id: 'pulseras',  keywords: ['bracelet', 'pulsera', 'bangle'] },
{ id: 'aros',      keywords: ['earring', 'aro', 'earrings'] },
]
function detectSubcategory(item) {
const text = `${item.title} ${item.description}`.toLowerCase()
const hit = SUBCATS.find(s => s.keywords.some(k => text.includes(k)))
return hit?.id ?? 'dijes'
}
export default function ItemListContainer({ text = 'Elegí, combiná y contá tu historia.' }) {
const { categoryId } = useParams()
const [items, setItems] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
useEffect(() => {
    let cancel = false
    async function load() {
    setLoading(true)
    setError(null)
    try {
        const res = await fetch('https://fakestoreapi.com/products/category/jewelery')
        if (!res.ok) throw new Error('Network error')
        const data = await res.json()
        // Retardo breve
        await new Promise(r => setTimeout(r, 500))
        if (!cancel) setItems(data)
    } catch (e) {
        if (!cancel) setError('No se pudieron cargar los productos')
    } finally {
        if (!cancel) setLoading(false)
    }
    }
    load()
    return () => { cancel = true }
}, [categoryId])

const list = useMemo(() => {
    if (!categoryId) return items
    return items.filter(p => detectSubcategory(p) === categoryId)
}, [items, categoryId])

if (loading) return <div className="container py-4">Cargando…</div>
if (error)   return <div className="container py-4 text-danger">{error}</div>

return (
    <section className="container py-4">
    <h2>Bienvenida a AMAVI</h2>
    <p className="mb-4">{text}</p>
<div className="row g-3">
{list.map(prod => (
    <div key={prod.id} className="col-6 col-md-4 col-lg-3">
    <div className="card product-card h-100">
        <div className="img-box">
        <img src={prod.image} alt={prod.title} loading="lazy" />
        </div>
        <div className="card-body d-flex flex-column">
        <h6 className="product-title mb-2">{prod.title}</h6>
        <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="price fw-semibold">
            ${prod.price.toLocaleString('es-AR')}
            </span>
            <Link to={`/item/${prod.id}`} className="btn btn-sm btn-dark">
            Ver detalle
            </Link>
        </div>
        </div>
    </div>
    </div>
))}
</div>
    {list.length === 0 && (
        <p className="text-muted mt-3">No hay productos en esta categoría.</p>
    )}
    </section>
)
}
