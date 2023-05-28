export default function getTeamAbbreviation(fullName) {
  let teamAbbreviation;
  const filteredFullName = fullName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]|(\([^()]+\))/g, "")
    .trim();

  switch (filteredFullName) {
    case "Atlanta Flames":
      teamAbbreviation = "AFM";
      break;
    case "Mighty Ducks of Anaheim":
    case "Anaheim Ducks":
      teamAbbreviation = "ANA";
      break;
    case "Arizona Coyotes":
      teamAbbreviation = "ARI";
      break;
    case "Atlanta Thrashers":
      teamAbbreviation = "ATL";
      break;
    case "Boston Bruins":
      teamAbbreviation = "BOS";
      break;
    case "Brooklyn Americans":
      teamAbbreviation = "BRK";
      break;
    case "Buffalo Sabres":
      teamAbbreviation = "BUF";
      break;
    case "Carolina Hurricanes":
      teamAbbreviation = "CAR";
      break;
    case "Columbus Blue Jackets":
      teamAbbreviation = "CBJ";
      break;
    case "Bay Area Seals":
    case "California Golden Seals":
      teamAbbreviation = "CGS";
      break;
    case "Calgary Flames":
      teamAbbreviation = "CGY";
      break;
    case "Chicago Black Hawks":
    case "Blackhawks":
      teamAbbreviation = "CHI";
      break;
    case "Cleveland Barons":
      teamAbbreviation = "CLE";
      break;
    case "Colorado Rockies":
      teamAbbreviation = "CLR";
      break;
    case "Colorado Avalanche":
      teamAbbreviation = "COL";
      break;
    case "Dallas Stars":
      teamAbbreviation = "DAL";
      break;
    case "Detroit Cougars":
      teamAbbreviation = "DCG";
      break;
    case "Detroit Red Wings":
      teamAbbreviation = "DET";
      break;
    case "Detroit Falcons":
      teamAbbreviation = "DFL";
      break;
    case "Edmonton Oilers":
      teamAbbreviation = "EDM";
      break;
    case "Florida Panthers":
      teamAbbreviation = "FLA";
      break;
    case "Hamilton Tigers":
      teamAbbreviation = "HAM";
      break;
    case "Hartford Whalers":
      teamAbbreviation = "HFD";
      break;
    case "Kansas City Scouts":
      teamAbbreviation = "KCS";
      break;
    case "Los Angeles Kings":
      teamAbbreviation = "LAK";
      break;
    case "Minnesota Wild":
      teamAbbreviation = "MIN";
      break;
    case "Montreal Maroons":
      teamAbbreviation = "MMR";
      break;
    case "Minnesota North Stars":
      teamAbbreviation = "MNS";
      break;
    case "Montreal Canadiens":
      teamAbbreviation = "MTL";
      break;
    case "Montreal Wanderers":
      teamAbbreviation = "MWN";
      break;
    case "New Jersey Devils":
      teamAbbreviation = "NJD";
      break;
    case "Nashville Predators":
      teamAbbreviation = "NSH";
      break;
    case "New York Americans":
      teamAbbreviation = "NYA";
      break;
    case "New York Islanders":
      teamAbbreviation = "NYI";
      break;
    case "New York Rangers":
      teamAbbreviation = "NYR";
      break;
    case "California Seals":
    case "Oakland Seals":
      teamAbbreviation = "OAK";
      break;
    case "Ottawa Senators":
    case "Ottawa Senators (1917)":
      teamAbbreviation = "OTT";
      break;
    case "Philadelphia Flyers":
      teamAbbreviation = "PHI";
      break;
    case "Phoenix Coyotes":
      teamAbbreviation = "PHX";
      break;
    case "Pittsburgh Pirates":
      teamAbbreviation = "PIR";
      break;
    case "Pittsburgh Penguins":
      teamAbbreviation = "PIT";
      break;
    case "Quebec Bulldogs":
      teamAbbreviation = "QBD";
      break;
    case "Philadelphia Quakers":
      teamAbbreviation = "QUA";
      break;
    case "Quebec Nordiques":
      teamAbbreviation = "QUE";
      break;
    case "Seattle Kraken":
      teamAbbreviation = "SEA";
      break;
    case "Ottawa Senators (original)":
      teamAbbreviation = "SEN";
      break;
    case "St. Louis Eagles":
      teamAbbreviation = "SLE";
      break;
    case "San Jose Sharks":
      teamAbbreviation = "SJS";
      break;
    case "St. Louis Blues":
      teamAbbreviation = "STL";
      break;
    case "Toronto Hockey Club":
    case "Toronto Arenas":
      teamAbbreviation = "TAN";
      break;
    case "Tampa Bay Lightning":
      teamAbbreviation = "TBL";
      break;
    case "Toronto Maple Leafs":
      teamAbbreviation = "TOR";
      break;
    case "Toronto St. Patricks":
      teamAbbreviation = "TSP";
      break;
    case "Vancouver Canucks":
      teamAbbreviation = "VAN";
      break;
    case "Vegas Golden Knights":
      teamAbbreviation = "VGK";
      break;
    case "Winnipeg Jets (original)":
      teamAbbreviation = "WIN";
      break;
    case "Winnipeg Jets":
      teamAbbreviation = "WPG";
      break;
    case "Washington Capitals":
      teamAbbreviation = "WSH";
      break;
    default:
      teamAbbreviation = "";
  }

  return teamAbbreviation;
}
