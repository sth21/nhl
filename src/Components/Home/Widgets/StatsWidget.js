import uniqid from 'uniqid';
import getPlayerImage from '../../../Utils/getPlayerImage';
import getTeamAbbreviation from './../../../Utils/getTeamAbbreviation';
import { useState } from 'react';

export default function StatsWidget(props) {
    const [ activeStat, setActiveStat ] = useState((props.pointsLeaders) ? props.pointsLeaders.leagueLeaders[0] : null);

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
            { 
                activeStat.leaders.map((player) => ( 
                    <div key = { uniqid() } >
                        <img src={ getPlayerImage(player.person.id, getTeamAbbreviation(player.team.name), activeStat.season.replace('-', '')) } alt={ player.person.fullName }></img>
                        <p>{ player.person.fullName }</p>
                        <p>{ player.value }</p>
                    </div>
                )) 
            }
          </div>
          : <></>
    );
    
}