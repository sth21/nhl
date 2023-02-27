/* Props:
    id: associated with player (ex. 8478402)
    team: associated with team (ex. EDM)
    year: (ex. 20222023)
*/

export default function usePlayerImage(id, team, year) {
    return `https://assets.nhle.com/mugs/nhl/${year}/${team}/${id}.png`;
}