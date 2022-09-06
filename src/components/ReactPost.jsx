import { useState } from "react";
import { BulletinBoard } from "./BulletinBoard";
import PostLiked from "./PostLiked";

const ReactPost = () => {
  const [showIfLiked, setShowIfLiked] = useState(false);

  const changeButton = (value) => {
    console.log("värdet är " + value)
  }

  return ( 
  <div className="grid">
  {BulletinBoard.map((item) => (
    <div className="grid-item"
    key={item.id}>
      <span className="row">
      <p>Fråga #{item.id}</p>
      <h2>{item.question}</h2>
      </span>
      <h3>{item.answer}</h3>

      <button 
      className="likebutton"
      key={item.id}
      value={item.id}
      onClick={(e) =>changeButton(e.target.value)}>Gilla</button>
    
    </div>  
    ))}
    </div> 

);
}
 
export default ReactPost;