import {useState, useEffect} from "react";
import Loading from "./Loading";
const  PostLiked = () => {

  const like = require("../img/icons8-thumbs-up-96.png")


  return ( <div className="row">
  <img src={like}
  loading="lazy"
  alt="En tumme upp!"/>
  <p>You have liked this post!</p>

  </div> );
}
 
export default PostLiked;