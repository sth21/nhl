import { StyledHeadlinesContainer, StyledHeader, StyledLink } from '../../../StyledComponents/Home/WidgetComponents';
import uniqid from 'uniqid';

export default function HeadlinesWidget(props) {
    
    return (
        <StyledHeadlinesContainer>
            <StyledHeader>Headlines</StyledHeader>
            {
                props.headlines.articles.map((article) => (
                    <StyledLink to={ article.links.web.href } key = { uniqid() }>{ article.headline }</StyledLink>
                ))
            }
        </StyledHeadlinesContainer>
    );
    
}