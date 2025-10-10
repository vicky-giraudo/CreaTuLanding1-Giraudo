import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItems, getItemsByCategory } from '../firebase/db';
import ItemList from './ItemList';

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getItemsByCategory(id).then(data => setItems(data));
        } else {
            getItems().then(data => setItems(data));
        }
    }, [id]);

    return <ItemList items={items} />;
}

export default ItemListContainer;



