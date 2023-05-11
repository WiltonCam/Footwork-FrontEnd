import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function FootwareNewForm() {
  let navigate = useNavigate();

  const addFootware = (newFootware) => {
    axios
      .post(`${API}/footwares`, newFootware)
      .then(
        () => {
          navigate(`/footwares`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [footware, setFootware] = useState({
    name: "",
    cost: "",
    url: "",
    category: "",
    is_Trending: false,
  });

  const handleTextChange = (event) => {
    setFootware({ ...footware, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setFootware({ ...footware, is_Trending: !footware.is_Trending });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addFootware(footware);
  };


return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={footware.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Footware"
          required
        />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={footware.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={footware.category}
          placeholder="sneaker, heel, sandal, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Trending:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={footware.is_Trending}
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/footware/${id}`}>
        <button>Go back!</button>
      </Link>
    </div>
  );
}

export default FootwareNewForm;
