import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import uniqid from 'uniqid';
import getPlayerImage from '../../../Utils/getPlayerImage';
import getTeamAbbreviation from './../../../Utils/getTeamAbbreviation';
import { useState } from 'react';

export default function StatsWidget(props) {
    const [ activeStat, setActiveStat ] = useState(props.pointsLeaders.leagueLeaders[0]);

    function statTypeReducer(statType) {
        if ( statType === "goals" ) {
            return "G"
        } else if ( statType === "assists" ) {
            return "A"
        } else if ( statType === "points" ) {
            return "P"
        } else if ( statType === "wins" ) {
            return "W"
        } else if ( statType === "savePct" ) {
            return "SV%"
        } else {
            return "D";
        }
    }

    return (
        (activeStat)
        ? <div>
            <h4>2022-2023 League Leaders</h4>
            <div>
                <button onClick={ () => setActiveStat(props.pointsLeaders.leagueLeaders[0]) }>Points</button>
                <button onClick={ () => setActiveStat(props.goalLeaders.leagueLeaders[0]) }>Goals</button>
                <button onClick={ () => setActiveStat(props.assistsLeaders.leagueLeaders[0]) }>Assists</button>
                <button onClick={ () => setActiveStat(props.winsLeaders.leagueLeaders[0]) }>Wins</button>
                <button onClick={ () => setActiveStat(props.savePercentLeaders.leagueLeaders[0]) }>Save %</button>
            </div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Rank</TableCell>
                            <TableCell>Team</TableCell>
                            <TableCell>Player</TableCell>
                            <TableCell>{ statTypeReducer(activeStat.leaderCategory) }</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            activeStat.leaders.map((player, index) => ( 
                                <TableRow key = { uniqid() }>
                                    <TableCell>{ index + 1 }</TableCell>
                                    <TableCell>
                                        <img src={ getPlayerImage(player.person.id, getTeamAbbreviation(player.team.name), activeStat.season.replace('-', '')) } alt={ player.person.fullName }></img>
                                        { getTeamAbbreviation(player.team.name) }
                                    </TableCell>
                                    <TableCell>{ player.person.fullName }</TableCell>
                                    <TableCell>{ player.value }</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
          </div>
          : <></>
    );
    
}