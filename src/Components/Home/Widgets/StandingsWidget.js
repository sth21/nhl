import { useState, useEffect } from 'react';
import useLogos from '../../../Utils/useLogos.js'
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
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Games Played</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>OT</th>
                        <th>Points</th>
                        <th>Streak</th>
                    </tr>
                </thead>
                <tbody>
                    {  
                        activeDivision.map((team) => (
                            <StandingsTeam logos = { props.logos } team = { team } key = { uniqid() } />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
    
}

function StandingsTeam(props) {
    
    return (
        <tr>
            <td>
               <img src={(props.logos) ? props.logos[props.team.team.id] : "#"} alt={ "Team logo" }></img>
                { props.team.team.name }
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