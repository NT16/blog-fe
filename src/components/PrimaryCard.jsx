import { Link } from "react-router-dom";
import Tags from "./Tags";

export default function PrimaryCard() {
  return (
    <div id="primary-card" className="card-c col-sm-6 col-12">
      <Link to="/articles/1">
        <div className="tile1__header">Header with some eye catching text</div>
        <div className="tile1__subheader">
          Sub header describing the main point of the article. Keep it short and
          to the point.
        </div>
      </Link>
      <Tags />
    </div>
  );
}

/*
C:\Users\Gandhi\code\blog-fe\public\james-wainscoat-3gcvyW8zHqY-unsplash.jpg
{ src, credits }
<Image src={src} credits={credits} />;


<div>{credits}</div>
*/

/*
// pre 21 Oct 2023
    <div id="primary-card" className="card-c col-sm-6 col-12">
      <Link to="/articles/1">
        <div className="card-c__image">
          <img src="../public/james-wainscoat-3gcvyW8zHqY-unsplash.jpg" />
        </div>

        <div className="tile1__header">Header with some eye catching text</div>
        <div className="tile1__subheader">
          Sub header describing the main point of the article. Keep it short and
          to the point.
        </div>
      </Link>
      <Tags />
    </div>
*/
