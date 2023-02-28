/* Tests:
    Home.js

    Scoreboard.js
        ScoreboardGame.js
            ScoreboardGameHeader.js

    WidgetContainer.js
        DraftWidget.js
        FantasyWidget.js
        HeadlinesWidget.js
        PlayersWidget.js
        StandingsWidget.js
        StatsWidget.js
*/

/* 

    (NEED MOCK COMPONENT)

    Scoreboard.js

    No props -> Empty element
    Props -> array of elements (correct amount of games)

*/

/* 

    (NEED TO MOCK COMPONENT)

    ScoreboardGame.js

    useLogo called with correct info
    Correct abbreviation
    if (pregame) record else if (in game) score
    ScoreboardGameHeader called with correct props

*/

/* 

    (NEED MOCK GAME DATA)

    ScoreboardGameHeader.js

    if (pregame && regular) time broadcast
    if ( pregame && playoff ) time playoffGame
    if ( ingame && regular ) displayClock period broadcast
    if ( ingame && regular && delayed) delayed broadcast
    if (ingame && playoff) displayClock period playoffGame
    if ( postgame && regular ) Final
    if ( postgame && OT ) Final/OT
    if ( postgame && SO ) Final/SO

*/