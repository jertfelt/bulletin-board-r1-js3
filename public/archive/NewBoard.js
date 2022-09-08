import { useEffect, useState } from "react";
import { BulletinBoard } from "./BulletinBoard";
const NewBoard = () => {
const [bulletList, setBulletList] = useState([])

useEffect(() => {
  
 const firstList = BulletinBoard.questions;
 setBulletList(firstList);
},[])

const setLikePost = (id) => {
  const newList = [...firstList];
  newList.find(({questionID}) => questionId ===id).postliked = true;
  setBulletList(newList);
}

const setPost= (id) => {
  const postList = bulletList.filter(post => post.questionId !== id);
  postList.push(bulletList.find(post => post.questionId === id));
  setBulletList(postList);
}

  return ( 
    <div>
      {bulletList.map((item) => {
        <ReactPost2
        key={item.questionId}
        {...question}
        likePost={setLikePost}
        changeZindex={setPost}
        />
      })}
    </div>
   );
}

export default NewBoard;