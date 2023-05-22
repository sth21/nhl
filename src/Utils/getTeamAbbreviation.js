export default function getTeamAbbreviation(fullName) {
  let teamAbbreviation;

  switch (fullName) {
    case "Anaheim Ducks":
      teamAbbreviation = "ANA";
      break;
    case "Arizona Coyotes":
      teamAbbreviation = "ARI";
      break;
    case "Boston Bruins":
      teamAbbreviation = "BOS";
      break;
    case "Buffalo Sabres":
      teamAbbreviation = "BUF";
      break;
    case "Calgary Flames":
      teamAbbreviation = "CGY";
      break;
    case "Carolina Hurricanes":
      teamAbbreviation = "CAR";
      break;
    case "Chicago Blackhawks":
      teamAbbreviation = "CHI";
      break;
    case "Colorado Avalanche":
      teamAbbreviation = "COL";
      break;
    case "Columbus Blue Jackets":
      teamAbbreviation = "CBJ";
      break;
    case "Dallas Stars":
      teamAbbreviation = "DAL";
      break;
    case "Detroit Red Wings":
      teamAbbreviation = "DET";
      break;
    case "Edmonton Oilers":
      teamAbbreviation = "EDM";
      break;
    case "Florida Panthers":
      teamAbbreviation = "FLA";
      break;
    case "Los Angeles Kings":
      teamAbbreviation = "LAK";
      break;
    case "Minnesota Wild":
      teamAbbreviation = "MIN";
      break;
    case "Montreal Canadiens":
      teamAbbreviation = "MTL";
      break;
    case "Nashville Predators":
      teamAbbreviation = "NSH";
      break;
    case "New Jersey Devils":
      teamAbbreviation = "NJD";
      break;
    case "New York Islanders":
      teamAbbreviation = "NYI";
      break;
    case "New York Rangers":
      teamAbbreviation = "NYR";
      break;
    case "Ottawa Senators":
      teamAbbreviation = "OTT";
      break;
    case "Philadelphia Flyers":
      teamAbbreviation = "PHI";
      break;
    case "Pittsburgh Penguins":
      teamAbbreviation = "PIT";
      break;
    case "San Jose Sharks":
      teamAbbreviation = "SJS";
      break;
    case "St. Louis Blues":
      teamAbbreviation = "STL";
      break;
    case "Tampa Bay Lightning":
      teamAbbreviation = "TBL";
      break;
    case "Toronto Maple Leafs":
      teamAbbreviation = "TOR";
      break;
    case "Vancouver Canucks":
      teamAbbreviation = "VAN";
      break;
    case "Vegas Golden Knights":
      teamAbbreviation = "VGK";
      break;
    case "Washington Capitals":
      teamAbbreviation = "WSH";
      break;
    case "Winnipeg Jets":
      teamAbbreviation = "WPG";
      break;
    case "Seattle Kraken":
      teamAbbreviation = "SEA";
      break;
    default:
      teamAbbreviation = "";
  }

  return teamAbbreviation;
}
