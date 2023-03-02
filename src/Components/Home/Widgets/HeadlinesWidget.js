import { Link } from "react-router-dom";
import uniqid from 'uniqid';

export default function HeadlinesWidget(props) {
    
    return (
        <div>
            <h4>Headlines</h4>
            {
                props.headlines.articles.map((article) => (
                    <Link to={ article.links.web.href } key = { uniqid() }>{ article.headline }</Link>
                ))
            }
        </div>
    );
    
}

/* TODO:
Go onto firestore, add a string for NHL team id, and modify logo to ESPN id
Reform useLogo to have an option parameter for NHL / ESPN

Finish Standings Widget (thead)

Players Widget (Starting goaltenders?? or just players??)

Draft Widget ( option to view draft rankings (NHL team / Prospect) )

Fantasy Widget ( may scrap )
*/