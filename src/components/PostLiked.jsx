import {useState, useEffect} from "react"
const  PostLiked = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [like, setLike] = useState("./src/img/icons8-thumbs-up-96.png")

 useEffect(() => {
  if (isLoading) {
    setTimeout(() => {
    setIsLoading(false);
    setLike("")
  }, 2000);
  }
}, [isLoading]);


  return ( <div></div> );
}
 
export default PostLiked;