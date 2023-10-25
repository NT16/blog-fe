import { useParams } from "react-router-dom";
import Tags from "./Tags";

export default function Article() {
  const id = useParams().id;
  return (
    <div className="article">
      <h1 className="article-header">Header</h1>
      <div className="row">
        <p className="col-sm-6 col-12 article-author">By : Yours truly</p>
        <p className="col-sm-6 col-12 article-date">Date</p>
      </div>

      <div className="article-body">
        <div>
          Many things to say . Not enough words to explain.Many things to say .
          Not enough words to explain.Many things to say . Not enough words to
          explain.Many things to say . Not enough words to explain.Many things
          to say . Not enough words to explain.Many things to say . Not enough
          words to explain.Many things to say . Not enough words to explain.Many
          things to say . Not enough words to explain. Many things to say . Not
          enough words to explain.Many things to say . Not enough words to
          explain.Many things to say . Not enough words to explain.Many things
          to say . Not enough words to explain.Many things to say . Not enough
          words to explain.Many things to say . Not enough words to explain.Many
          things to say . Not enough words to explain.Many things to say . Not
          enough words to explain.
        </div>
        <div>
          Many things to say . Not enough words to explain.Many things to say .
          Not enough words to explain.Many things to say . Not enough words to
          explain.Many things to say . Not enough words to explain.Many things
          to say . Not enough words to explain.Many things to say . Not enough
          words to explain.Many things to say . Not enough words to explain.Many
          things to say . Not enough words to explain. Many things to say . Not
          enough words to explain.Many things to say . Not enough words to
          explain.Many things to say . Not enough words to explain.Many things
          to say . Not enough words to explain.Many things to say . Not enough
          words to explain.Many things to say . Not enough words to explain.Many
          things to say . Not enough words to explain.Many things to say . Not
          enough words to explain. Many things to say . Not enough words to
          explain.Many things to say . Not enough words to explain.Many things
          to say . Not enough words to explain.Many things to say . Not enough
          words to explain.Many things to say . Not enough words to explain.Many
          things to say . Not enough words to explain.Many things to say . Not
          enough words to explain.Many things to say . Not enough words to
          explain.
        </div>
        <div>
          Many things to say . Not enough words to explain.Many things to say .
          Not enough words to explain.Many things to say . Not enough words to
          explain.Many things to say . Not enough words to explain.Many things
          to say . Not enough words to explain.Many things to say . Not enough
          words to explain.Many things to say . Not enough words to explain.Many
          things to say . Not enough words to explain.
        </div>
      </div>
      <Tags />
    </div>
  );
}
