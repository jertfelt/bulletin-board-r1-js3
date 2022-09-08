import { useState} from "react";
import PostLiked from "./PostLiked";

const ReactPost = ({Qid, question, answer, liked, handleToggle}) => {


  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.value)
    console.log(e.currentTarget)
  }

  return (
  <div 
  className="grid-item">
    <span className="grid-text">
      <p>Fråga #{Qid}</p>
      <h2>{question}</h2>
      <h3>{answer}</h3>
    </span>
    <div 
      className={`wrapper__${Qid} grid-likebutt`}
    >
      {liked ? (
        <div className="">
        
      <PostLiked/>
      <button 
      value = {Qid}
      onClick={handleClick}>Ogilla</button>    
      </div>
      ): (
      <>
        <button
        value = {Qid}
        onClick={handleClick}>
        Gilla
        </button>  
      </>
      )}
      
    </div>
  </div>
    );
}
 
export default ReactPost;