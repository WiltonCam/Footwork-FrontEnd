import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";


const API = process.env.REACT_APP_API_URL;

function FootwareDetails() {
  const [footware, setFootware] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/footware/${id}`)
      .then((response) => {
        setFootware(response.data);
      })
      .catch((e) => {
        console.warn("catch:", e);
      });
  }, [id]);

  const handleDelete = () => {
    deleteFootware();
  };

  const deleteFootware = () => {
    axios
      .delete(`${API}/footware/${id}`)
      .then(() => {
        navigate(`/footware`);
      })
      .catch((e) => {
        console.warn("catch:", e);
      });
  };

  return (
    <article>
      <h3>
        {footware.is_Trending ? <span>⭐️</span> : null} {bookmark.name}
      </h3>
      <h5>
        <span>
          <a href={footware.url}>{footware.name}</a>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {footware.url}
      </h5>
      <h6>{footware.category}</h6>
      <div className="showNavigation">
        <div>
          <Link to={`/footware`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/footware/id/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      {/* <Reviews/> */}
    </article>

  );
}

export default FootwareDetails;