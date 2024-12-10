import React from "react";
import DataCom from "./DataCom";
import Todo from "./Todo";
import StyleOnMapData from "./StyleOnMapData";
import SearchData from "./SearchData";

function App() {

  return (
    <div className="App">
      <StyleOnMapData />
      <SearchData />
      <DataCom />
      {/* <Todo /> */}
    </div>
  );
}

export default App;
