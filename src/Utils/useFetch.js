import { useState, useEffect } from 'react';

export default function useFetch( url ) {
    const [ data, setData ] = useState(null);

    useEffect(() => { 
        fetch(url, { mode: 'cors' })
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [ url ]);

    return [ data ];
}