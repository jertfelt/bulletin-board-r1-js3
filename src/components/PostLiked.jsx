
const  PostLiked = () => {
  const likeimg = require("../img/icons8-thumbs-up-96.png")

 

  return ( 
  <div className="row"
  >
  <img src={likeimg}
  loading="lazy"
  alt="En tumme upp!"/>
  <h2>Du gillar detta!</h2>

  </div> );
}
 
export default PostLiked;