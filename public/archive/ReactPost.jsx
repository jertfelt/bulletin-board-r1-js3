import { useEffect, useRef, useState} from "react";
import { BulletinBoard } from "./BulletinBoard";

import PostLiked from "./PostLiked";

const ReactPost = () => {
  const [bulletItems, setBulletItems] = useState([]);
  const [likePost, setLikePost] = useState(false);
  const postRef = useRef();
  const [showDiv, setShowDiv] = useState(false);
 
  useEffect(() => {
    const renderFirstList = BulletinBoard.map((item) => (
      <div className="grid-item"
      key={item.id}></div>
    ))
  })
  

  const pickAndShow= (e) => {
    e.preventDefault();
    const chosenItem = e.target.getAttribute("value");
    console.log(chosenItem)

  
  }
  
  return ( 
  <div className="grid">
  {BulletinBoard.map((item) => (
    <div className="grid-item"
    key={item.id}>
      {setLikePost(item.postLiked)}
      <span className="grid-text">
      <p>Fråga #{item.id}</p>
      <h2>{item.question}</h2>
      <h3>{item.answer}</h3>
      </span>
      <div 
      className={`wrapper__${item.id} grid-likebutt`}
      >
      {!showDiv ? (
      <button
      onClick={() => {
        setShowDiv(!showDiv)
      }}>Gilla
      </button>
        ): (
          <div className="postlike">
          <PostLiked />
          <button
          onClick={() => {
            setShowDiv(!showDiv)
          }}> Ogilla
          </button>
        </div>
        )
      }

      </div>
    </div>  
    ))}
  </div> 
);
}
 
export default ReactPost;