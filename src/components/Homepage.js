import { useState, useEffect } from "react";
import ReactPost from "./ReactPost";
import Loading from "./Loading";

const Homepage = () => {
  const [showAllItems, setShowAllItems] = useState(false)
const [toggleShowAll, setToggleShowAll] = useState(true);
const [isLoading, setIsLoading] = useState(false);

const toggleBoard = () => {
  setIsLoading(true);
  setToggleShowAll(false);
}

useEffect(() => {
  if (isLoading) {
    setTimeout(() => {
    setIsLoading(false);
    setShowAllItems(true);
    
  }, 2000);
  }
}, [isLoading]);



  return ( 
    
    <div className="bulletin-board">
    {toggleShowAll ? 
    <div className="intro">
    <h2>Här samlar vi en massa mysig information om React. </h2>
    <p>Ett studentprojekt av Tova Jertfelt</p>

    <button className="reveal giganticbutt" 
    onClick={toggleBoard}>
      Visa anslagstavlan
    </button> 
    </div>
    :null }
     {isLoading ? <Loading /> : null }
    {showAllItems ? 
    <ReactPost />
    :null }
    </div>
  );
}

export default Homepage;