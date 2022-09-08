import { useState, useEffect } from "react";
import BulletinBoard from "./BulletinBoard";
import Loading from "./Loading";
import AboutPost from "./AboutPost"

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
    <article className="intro">
    <h2>Här samlar vi en massa mysig information om React. </h2>
    <p>Ett studentprojekt av Tova Jertfelt</p>

    <button className="reveal giganticbutt" 
    onClick={toggleBoard}>
      Visa anslagstavlan
    </button> 
    </article>
    :null }
     {isLoading ? <Loading /> : null }
    {showAllItems ? 
    <div>
      <BulletinBoard/>
   
     
    </div>
    :null }
    <AboutPost />
    </div>
  );
}

export default Homepage;