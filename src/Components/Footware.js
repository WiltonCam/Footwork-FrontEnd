import { Link } from "react-router-dom";

function Footware({footware}) {
  return (
    <tr>
      <td>
        {footware.is_Trending ? (
          <span>🔥</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={footware.url} target="_blank" rel="noreferrer">
          {footware.name}
        </a>
      </td>
      <td>
        <Link to={`/footware/${footware.id}`}>👟</Link>
      </td>
    </tr>
  );
}

export default Footware;
