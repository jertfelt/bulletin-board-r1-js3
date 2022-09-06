import { useState} from "react";
import { BulletinBoard } from "./BulletinBoard";
import PostLiked from "./PostLiked";

const ReactPost = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [likeButton, setLikeButton] = useState(true);

  const pickAndShow= (e) => {
    e.preventDefault();
    const chosenItem = e.currentTarget.value; 
    
    console.log("the item is: " + chosenItem)

    const filter = BulletinBoard.filter(item => {
      return item.id === parseInt(chosenItem)
    })
   
    console.log(filter)
    
    
    setShowDiv(true);
    setLikeButton(false);
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

      <div 
      className={`wrapper__${item.id}`}
      >
    
    {likeButton ?
      <button
      className="likebutton"
      key={item.id}
      value={item.id}
      onClick={pickAndShow}
      >Gilla 
      </button>
      :null }

      <div data-key={item.id}>
      {showDiv ? 
      <PostLiked/>
      :null }
      </div> 
      </div>
    </div>  
    ))}
    </div> 

);
}
 
export default ReactPost;