import uniqid from 'uniqid';
import getPlayerImage from '../../../Utils/getPlayerImage';
import getTeamAbbreviation from './../../../Utils/getTeamAbbreviation';

export default function StatsWidget(props) {
    const goalLeaders = ( props.goalLeaders ) ? props.goalLeaders.leagueLeaders[0] : null;

    return (
        (goalLeaders)
        ? <div>
            <p>Goal Leaders</p>
            { 
                goalLeaders.leaders.map((player) => ( 
                    <div key = { uniqid() } >
                        <img src={ getPlayerImage(player.person.id, getTeamAbbreviation(player.team.name), goalLeaders.season.replace('-', '')) } alt={ player.person.fullName }></img>
                        <p>{ player.person.fullName }</p>
                        <p>{ player.value }</p>
                    </div>
                )) 
            }
          </div>
          : <></>
    );
    
}