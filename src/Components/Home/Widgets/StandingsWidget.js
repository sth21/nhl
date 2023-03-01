import { useState } from 'react';
import useLogo from '../../../Utils/useLogo';
import uniqid from 'uniqid';

export default function StandingsWidget(props) {
    const [ activeDivision, setActiveDivision ] = useState(props.standings.records[1].teamRecords);

    return (
        <div>
            <h4>Standings</h4>
            <div>
                <button onClick = { () => setActiveDivision(props.standings.records[1].teamRecords) }>Atlantic</button>
                <button onClick = { () => setActiveDivision(props.standings.records[0].teamRecords) }>Metropolitan</button>
                <button onClick = { () => setActiveDivision(props.standings.records[3].teamRecords) }>Pacific</button>
                <button onClick = { () => setActiveDivision(props.standings.records[2].teamRecords) }>Central</button>
            </div>
            <table>
                <tbody>
                    {
                        activeDivision.map((team) => (
                            <StandingsTeam team = { team } key = { uniqid() } />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
    
}

function StandingsTeam(props) {
    const logo = useLogo(props.team.team.id.toString());

    return (
        <tr>
            <td>
                { props.team.team.name }
                <img src={ ( logo ) ? logo : "#" } alt={ "Team logo" }></img>
            </td>
            <td>{ props.team.gamesPlayed }</td>
            <td>{ props.team.leagueRecord.wins }</td>
            <td>{ props.team.leagueRecord.losses }</td>
            <td>{ props.team.leagueRecord.ot }</td>
            <td>{ props.team.points }</td>
            <td>{ props.team.streak.streakCode }</td>
        </tr>
    );
}