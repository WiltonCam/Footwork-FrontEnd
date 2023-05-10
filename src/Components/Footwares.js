import axios from "axios";
import { useState, useEffect } from "react";
import Footware from "./Footware.js";

const API = process.env.REACT_APP_API_URL;

function Footwares() {
  const [footwares, setFootwares] = useState([]);
  useEffect(() => {
    axios.get(`${API}/footware`).then((response) => {
      setFootwares(response.data)
    }).catch((e)=> {
      console.warn("catch", e)
    })
  }, []);
  return (
    <div className="Bookmarks">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this footware</th>
            </tr>
          </thead>
          <tbody>
            {footware.map((footware) => {
              return <Footware key={footware.id} footware={footware} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Footwares;
