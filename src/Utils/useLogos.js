import { useState, useEffect } from 'react';
import { DB } from '../firebase';
import { collection, getDocs } from "firebase/firestore";

export default function useLogos(OPTION) {
    console.log("useLogos called")
    const [ logos, setLogos ] = useState(null);
    
    useEffect(() => {
        const getLogos = async () => {
            console.log("Y");
            const rawData = await getDocs(collection(DB, "team-logos"));
            console.log(rawData);
            setLogos("Y");
        }

       getLogos();
    }, [OPTION]);
    
    return logos;
}