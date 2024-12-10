import React, { useEffect, useState } from "react";
import axios from "axios";

const StyleOnMapData = () => {
  const [use, setUse] = useState([]);
  const [styl, setStyl] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setUse(response.data))
      .catch((error) => console.error("Fetching Error", error));
  }, []);

  const changeStyle = (item) => {
    setStyl(item);
  };
  return (
    <div style={{ padding: "10px" }}>
      <h3>Active Inactive on Map data</h3>
      {use?.map((item) => {
        return (
          <div key={item.id}>
            <p
              onClick={() => changeStyle(item)}
              style={{ color: item === styl ? "red" : "blue" }}
            >
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StyleOnMapData;
