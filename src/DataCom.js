import React, { useEffect, useState } from "react";
import axios from "axios";

const DataCom = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      .catch(error => console.error("Fetching data error", error));
  }, []);
  console.log(data);
  return (
    <>
      <div style={{padding: '10px'}}>
        <h3>Axios Api Call</h3>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DataCom;
