import { Table, TableBody, TableHead, TableRow } from '@mui/material';
import { StyledHeader, StyledTableCell, StyledTableHeader, StyledTableContainer } from '../../../StyledComponents/Home/WidgetComponents';
import { StyledOptionContainer, StyledOption } from '../../../StyledComponents/General/GeneralComponents';

import uniqid from 'uniqid';
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
            <StyledHeader>Stats</StyledHeader>
            <StyledOptionContainer>
                <StyledOption bold={ (activeStat.leaderCategory === "points") } onClick={ () => setActiveStat(props.pointsLeaders.leagueLeaders[0]) }>Points</StyledOption>
                <StyledOption bold={ (activeStat.leaderCategory === "goals") } onClick={ () => setActiveStat(props.goalLeaders.leagueLeaders[0]) }>Goals</StyledOption>
                <StyledOption bold={ (activeStat.leaderCategory === "assists") } onClick={ () => setActiveStat(props.assistsLeaders.leagueLeaders[0]) }>Assists</StyledOption>
                <StyledOption bold={ (activeStat.leaderCategory === "wins") } onClick={ () => setActiveStat(props.winsLeaders.leagueLeaders[0]) }>Wins</StyledOption>
                <StyledOption bold={ (activeStat.leaderCategory === "savePct") } onClick={ () => setActiveStat(props.savePercentLeaders.leagueLeaders[0]) }>Save %</StyledOption>
            </StyledOptionContainer>
            <StyledTableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableHeader>Rank</StyledTableHeader>
                            <StyledTableHeader>Team</StyledTableHeader>
                            <StyledTableHeader>Player</StyledTableHeader>
                            <StyledTableHeader>{ statTypeReducer(activeStat.leaderCategory) }</StyledTableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            activeStat.leaders.map((player, index) => ( 
                                <TableRow key = { uniqid() }>
                                    <StyledTableCell>{ index + 1 }</StyledTableCell>
                                    <StyledTableCell><img src={ (props.logos) ? props.logos[parseInt(player.team.id, 10)] : "#" } alt="Player"></img></StyledTableCell>
                                    <StyledTableCell>{ player.person.fullName }</StyledTableCell>
                                    <StyledTableCell>{ player.value }</StyledTableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </StyledTableContainer>
          </div>
          : <></>
    );
    
}