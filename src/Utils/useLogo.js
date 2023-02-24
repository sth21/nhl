import { useState, useEffect } from 'react';
import { DB } from '../firebase';
import { doc, getDoc } from "firebase/firestore";

export default function useLogo(id) {
    const [ logo, setLogo ] = useState(null)

    // Fetch url from id
    useEffect(() => {
        if ( !id ) return;

        const fetchLogo = async () => {
            const logoDoc = await getDoc(doc(DB, "team-logos", id));
            const logo = logoDoc.data().logo;
            setLogo(logo);
        };
        
        fetchLogo();
    }, [ id ]);

    return logo;
}