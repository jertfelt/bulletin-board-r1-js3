
const  PostLiked = () => {
  const likeimg = require("../img/icons8-thumbs-up-96.png")

  return ( 
  <div className="row">
  <img src={likeimg}
  loading="lazy"
  alt="En tumme upp!"/>
  <p>You have liked this post!</p>

  </div> );
}
 
export default PostLiked;