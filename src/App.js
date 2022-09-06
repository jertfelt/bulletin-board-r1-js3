import React from "react";

import ReactPost from "./components/ReactPost";
function App() {
  


  return (
    <div className="App">
      <header>
      <h1>En liten hemsida om REACT</h1>
      </header>
      <div className="bulletin-board">
      <ReactPost />
      </div>
    </div>
  );
}

export default App;
