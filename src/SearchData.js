import React, { useEffect, useState } from "react";

function SearchData() {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filterData = userData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fake-json-api.mock.beeceptor.com/users"
      );
      const data = await response.json();
      setUserData(data);
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <h3>Search in Map data</h3>
      <div style={{ padding: "2px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>
      <table
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        border="1px solid #000"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filterData?.map((item) => (
            <tr key={item.id}>
              <td style={{ padding: "2px" }}>{item.name}</td>
              <td style={{ padding: "2px" }}>{item.company}</td>
              <td style={{ padding: "2px" }}>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchData;
