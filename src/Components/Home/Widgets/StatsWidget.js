import uniqid from 'uniqid';

export default function StatsWidget(props) {
    const goalLeaders = props.goalLeaders.leagueLeaders[0].leaders;


    return (
        <div>
            <p>Goal Leaders</p>
            { 
                goalLeaders.map((player) => ( 
                    <div key = { uniqid() } >
                        <p>{ player.person.fullName }</p>
                        <p>{ player.value }</p>
                    </div> 
                )) 
            }
        </div>
    );
    
}