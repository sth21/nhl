import { useState } from 'react';
import uniqid from 'uniqid';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

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
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Team</TableCell>
                            <TableCell>Games Played</TableCell>
                            <TableCell>Wins</TableCell>
                            <TableCell>Losses</TableCell>
                            <TableCell>OT</TableCell>
                            <TableCell>Points</TableCell>
                            <TableCell>Streak</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {  
                            activeDivision.map((team) => (
                                <TableRow key = { uniqid() }>
                                    <TableCell>
                                        <img src={(props.logos) ? props.logos[team.team.id] : "#"} alt={ "Team logo" }></img>
                                        { team.team.name }
                                    </TableCell>
                                    <TableCell>{ team.gamesPlayed }</TableCell>
                                    <TableCell>{ team.leagueRecord.wins }</TableCell>
                                    <TableCell>{ team.leagueRecord.losses }</TableCell>
                                    <TableCell>{ team.leagueRecord.ot }</TableCell>
                                    <TableCell>{ team.points }</TableCell>
                                    <TableCell>{ team.streak.streakCode }</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
    
}
