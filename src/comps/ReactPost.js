import {useRef, useState} from "react";
import PostLiked from "../comps/PostLiked";

const ReactPost = ({Qid, question, answer, liked, likePost}) => {
  const itemRef = useRef();

  const likeButt = (e) => {
    e.preventDefault();
    likePost(Qid)
  }

  return (
  <div ref={itemRef}
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
        <PostLiked />
      ): (
        <button
        onClick={likeButt}>
        Gilla
        </button>
      )}
      
    </div>
  </div>
    );
}
 
export default ReactPost;