import { Link } from "react-router-dom";
import Tags from "./Tags";

export default function CardCompact() {
  return (
    <div className="row card-c">
      <Link to="/articles/1">
        <div className="tile2__header">
          Compact tiles : Header with some eye catching text
        </div>
        <div className="tile2__subheader">
          Compact tiles : Sub header describing the main point of the article.
          Keep it short and to the point.
        </div>
      </Link>
      <Tags yellow={true} />
    </div>
  );
}

/*
 <div className="row card-c">
      <Link className="card-c__image col-4" to="/articles/1">
        <img src="../public/james-wainscoat-3gcvyW8zHqY-unsplash.jpg" />
      </Link>
      <div className="col-8">
        <Link to="/articles/1">
          <div className="tile2__header">
            Compact tiles : Header with some eye catching text
          </div>
          <div className="tile2__subheader">
            Compact tiles : Sub header describing the main point of the article.
            Keep it short and to the point.
          </div>
        </Link>
        <Tags />
      </div>
    </div>
*/
