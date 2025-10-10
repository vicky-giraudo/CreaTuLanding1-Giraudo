import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getItem } from '../firebase/db';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const [item, setItem] = useState();
    const { id } = useParams();
    useEffect(() => {
        getItem(id).then(data => setItem(data));
    }, [id]);
    return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
