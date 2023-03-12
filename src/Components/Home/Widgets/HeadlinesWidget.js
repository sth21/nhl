import {
  StyledHeader,
  StyledLink,
  StyledHeadlineWrapper,
} from "../../../StyledComponents/Home/WidgetComponents";
import uniqid from "uniqid";

export default function HeadlinesWidget(props) {
  return (
    <div>
      <StyledHeader>Headlines</StyledHeader>
      <StyledHeadlineWrapper>
        {props.headlines.articles.map((article) => (
          <StyledLink
            to={article.links.web.href}
            target="_blank"
            key={uniqid()}
          >
            {article.headline}
          </StyledLink>
        ))}
      </StyledHeadlineWrapper>
    </div>
  );
}
