import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
    doc,
    getDoc,
    addDoc,
} from "firebase/firestore";
import { app } from "./config";
import toast from 'react-hot-toast';

const db = getFirestore(app);

export const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const items = [];
    querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
    });
    return items;
}

export const getCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    
    const uniqueCategories = new Set();
    
    querySnapshot.forEach((doc) => {
        const itemData = doc.data();
        if (itemData.category) {
            uniqueCategories.add(itemData.category.toString().toLowerCase());
        }
    });

    const categoriesArray = Array.from(uniqueCategories).map(catName => ({
        id: catName,     
        name: catName.charAt(0).toUpperCase() + catName.slice(1) 
    }));
    
    return categoriesArray;
}

export const getItemsByCategory = async (category) => {
    const q = query(collection(db, "items"), where("category", "==", category));
    const items = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
    });
    return items;
}
export const getItem = async (id) => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { ...docSnap.data(), id: docSnap.id };
    } else {
        console.log("No such document!");
    }
}

export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order);
        toast.success(`Compra realizada con éxito! Su número de orden es: ${docRef.id}`); 
        return docRef.id;
    } catch (error) {
        toast.error(`Ocurrió un error: ${error.code}`); 
        return null;
    }
}