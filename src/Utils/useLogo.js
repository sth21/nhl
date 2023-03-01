import { useState, useEffect } from 'react';
import { DB } from '../firebase';
import { doc, getDoc } from "firebase/firestore";

export default function useLogo(id) {
    const [ logo, setLogo ] = useState(null)

    // Fetch url from id
    useEffect(() => {
        if ( !id ) return;

        const fetchLogo = () => getDoc(doc(DB, "team-logos", id))
        .then((res) => res.data())
        .then((data) => setLogo(data.logo))
        .catch((err) => console.log(err));
        
        fetchLogo();
    }, [ id ]);

    return logo;
}