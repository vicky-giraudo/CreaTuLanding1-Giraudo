import { useEffect, useState } from 'react';
import { getCategories } from '../firebase/db';
import NavBar from './NavBar';

function NavBarContainer() {
    const [categories, setCategories] = useState([]);

useEffect(() => {
    getCategories().then(categoriesFromDB => {
        console.log(categoriesFromDB);
        setCategories(categoriesFromDB);
    });
}, []);


    return <NavBar categories={categories} />;
}

export default NavBarContainer;

