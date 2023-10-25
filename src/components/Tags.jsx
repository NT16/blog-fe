import { Link } from "react-router-dom";
export default function Tags({ yellow }) {
  const mainClass = "tag ";
  const classModifier = yellow === true ? "tag--yellow" : "tag--blue";
  console.log("tag class names :", mainClass + classModifier);
  return (
    <div className="tags">
      <Link className={mainClass + classModifier} to="/tags/1">
        Tag1
      </Link>
      <Link className={mainClass + classModifier} to="/tags/1">
        Tag2
      </Link>
      <Link className={mainClass + classModifier} to="/tags/1">
        Tag3
      </Link>
    </div>
  );
}
