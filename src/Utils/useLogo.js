import { useState, useEffect } from 'react';
import { DB } from '../firebase';
import { doc, getDoc } from "firebase/firestore";

export default function useLogo(ID, OPTION) {

    const [ logo, setLogo ] = useState(null)

    // Fetch url from id
    useEffect(() => {
        if ( !(ID && OPTION) ) return;

        const fetchLogo = () => getDoc(doc(DB, "team-logos", ID))
        .then((res) => res.data())
        .then((data) => setLogo(data.logo[OPTION]))
        .catch((err) => console.log(err));
        
        fetchLogo();
    }, [ ID, OPTION ]);

    return logo;

}