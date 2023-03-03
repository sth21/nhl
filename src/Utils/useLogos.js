import { useState, useEffect } from 'react';
import { DB } from '../firebase';
import { collection, getDocs } from "firebase/firestore";

export default function useLogos(OPTION) {
    
    const [ logos, setLogos ] = useState(null);
    
    useEffect(() => {
        const getLogos = () => {
            getDocs(collection(DB, "team-logos"))
            .then((res) => res.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
            .then((res) => res.filter((doc) => doc.logo[OPTION]))
            .then((res) => setLogos(res.reduce((acc, cur) => { acc[cur.id] = cur.logo[OPTION]; return acc; }, {})))
            .catch((err) => console.log(err));
        }

       getLogos();
    }, [OPTION]);
    
    return logos;

}