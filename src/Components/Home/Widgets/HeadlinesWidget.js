import { Link } from "react-router-dom";

export default function HeadlinesWidget(props) {
    
    return (
        <div>
            <h4>Headlines</h4>
            {
                props.headlines.articles.map((article) => (
                    <Link to={ article.links.web.href }>{ article.headline }</Link>
                ))
            }
        </div>
    );
    
}