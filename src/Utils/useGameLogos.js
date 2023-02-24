import { useState, useEffect } from 'react';
import { DB } from '../firebase';
import { doc, getDoc } from "firebase/firestore";

export default function useGameLogos(gameInfo) {
    const [ logos, setLogos ] = useState(new Array((gameInfo) ? gameInfo.events.length : 1).fill([ null, null ]));

    // For each ID provided, fetch the corresponding image url from firebase
    useEffect(() => {
        if ( !gameInfo ) return;
        const ids = gameInfo.events
            .map((game) => [ game.competitions[0].competitors[0].id, game.competitions[0].competitors[1].id ]);

        const fetchLogos = async () => {
            const promises = ids.map((game) => Promise.all(game.map((team) => {
                if (team) {
                    return getDoc(doc(DB, "team-logos", team))
                        .then((res) => res.data().logo)
                        .catch((err) => null)
                }
                return null;
            })));
            const logos = await Promise.all(promises);
            setLogos(logos);
        };
        fetchLogos();
    }, [ gameInfo ]);

    return [ logos, setLogos ];
}