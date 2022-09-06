import React, { useState } from "react";

import ReactPost from "./components/ReactPost";
function App() {
  
const [showAllItems, setShowAllItems] = useState(false)

  return (
    <div className="App">
      <header>
      <h1>En liten hemsida om REACT</h1>
      </header>
      <div className="bulletin-board">
      {/* <button className="reveal giganticbutt" 
      onClick={() => setShowAllItems(true)}>
        Visa anslagstavlan
      </button> */}
      <ReactPost />
      </div>
    </div>
  );
}

export default App;
