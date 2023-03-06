import uniqid from 'uniqid';

export default function DraftWidget(props) {
    
    const firstPickOdds = [ "25.5%", "13.5%", "11.5%", "9.5%", "8.5%", "7.5%", "6.5%", "6.0%", "5.0%", "3.5%", "3.0%"]
    
    const teams = [...props.teams.slice(20)].reverse();

    return (
        <div>
            <p>Draft Widget</p>
            {
                teams.map((team, index) => (
                    <div key = { uniqid() }>
                        <p>{ index + 1 }</p>
                        <img src={ (props.logos) ? props.logos[parseInt(team.team.id, 10)] : "#" } alt="Team"></img>
                        <p>{ firstPickOdds[index] }</p>
                    </div>
                ))
            }
        </div>
    );
    
}