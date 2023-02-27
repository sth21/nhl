import useFetch from './../../../Utils/useFetch';
import StandingsWidget from './StandingsWidget';
import HeadlinesWidget from './HeadlinesWidget';
import StatsWidget from './StatsWidget';
import DraftWidget from './DraftWidget';
import PlayersWidget from './PlayersWidget';
import FantasyWidget from './FantasyWidget';

import { useEffect } from 'react';

export default function WidgetContainer() {
    
    // For StatsWidget
    const goalLeaders = useFetch("https://statsapi.web.nhl.com/api/v1/stats/leaders?expand=leaderPlayerFirstName,leaderPlayerLastName,leaderTeam&gameTypes=R&leaderCategories=goals&limit=5");
    const assistLeaders = useFetch("https://statsapi.web.nhl.com/api/v1/stats/leaders?expand=leaderPlayerFirstName,leaderPlayerLastName,leaderTeam&gameTypes=R&leaderCategories=assists&limit=5");
    const pointsLeaders = useFetch("https://statsapi.web.nhl.com/api/v1/stats/leaders?expand=leaderPlayerFirstName,leaderPlayerLastName,leaderTeam&gameTypes=R&leaderCategories=points&limit=5");
    const winsLeaders = useFetch("https://statsapi.web.nhl.com/api/v1/stats/leaders?expand=leaderPlayerFirstName,leaderPlayerLastName,leaderTeam&gameTypes=R&leaderCategories=wins&limit=5");
    const savePercentLeaders = useFetch("https://statsapi.web.nhl.com/api/v1/stats/leaders?expand=leaderPlayerFirstName,leaderPlayerLastName,leaderTeam&gameTypes=R&leaderCategories=savePct&limit=5");
    
    // For HeadlinesWidget
    const todaysHeadlines = useFetch("https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news");

    useEffect(() => console.log(goalLeaders), [ goalLeaders ]);
        
    return (
        <div>
            <StandingsWidget />
            <HeadlinesWidget />
            <StatsWidget 
                goalLeaders = { goalLeaders } 
                assistLeaders = { assistLeaders }
                pointsLeaders = { pointsLeaders }
                winsLeaders = { winsLeaders }
                savePercentLeaders = { savePercentLeaders }
            />
            <DraftWidget />
            <PlayersWidget />
            <FantasyWidget />
        </div>
    );

}