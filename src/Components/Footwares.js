import axios from "axios";
import { useState, useEffect } from "react";
import Footware from "./Footware.js";

const API = process.env.REACT_APP_API_URL;

function Footwares() {
  const [footwares, setFootwares] = useState([]);
  useEffect(() => {
    axios.get(`${API}/footware`).then((response) => {
        console.log(response.data)
      setFootwares(response.data)
    }).catch((e)=> {
      console.warn("catch", e)
    })
  }, []);
  return (
    <div className="Bookmarks">
      <section>
       <div>
            {footwares.map((footware) => {
              return <Footware key={footware.id} footware={footware} />;
            })}
          </div>
      </section>
    </div>
  );
}

export default Footwares;
