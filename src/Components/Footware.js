import { Link } from "react-router-dom";

function Footware({footware}) {
  return (
    <div>
     <p>
        {footware.is_Trending ? (
          <span>🔥</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </p>
      <p>{footware.name}</p>
      <p>
        <a href={footware.url} target="_blank" rel="noreferrer">
          {footware.url}
        </a>
        <p>${footware.cost}</p>
      </p>
      <p>
        <Link to={`/footware/${footware.id}`}>👟</Link>
      </p>
    </div>
  );
}

export default Footware;
