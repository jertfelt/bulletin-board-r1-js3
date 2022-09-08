
const  PostLiked = () => {
  const likeimg = require("../img/icons8-thumbs-up-96.png")
  const unLikeButt = () => {
    console.log("work in progress")
  }

  return ( 
  <div className="row"
  >
  <img src={likeimg}
  loading="lazy"
  alt="En tumme upp!"/>
  <h2>Du gillar detta!</h2>
  <button
        onClick={unLikeButt}>
        Ogilla
        </button>

  </div> );
}
 
export default PostLiked;