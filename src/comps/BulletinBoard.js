import questionsdata from "../data/QuestionsData.json"
import { useState, useEffect } from "react";
import ReactPost from "./ReactPost";
// import axios from "axios";

const BulletinBoard = () => {
  // const [loading, setLoading] = useState(false);
  //  const [error, setError] = useState(null);
  const [listOfItems, setListOfItems] = useState([])

  
  useEffect(() => {
    // const renderOnFirst = () => {
      const firstRender = JSON.parse(JSON.stringify(questionsdata)).faq;
  
      setListOfItems(firstRender);
    // }
  
    // renderOnFirst().catch(err => {
    //   setError(err)
    // })
   
  }, [])

// useEffect(() => {
//   axios.get("../src/data/QuestionsData.json").then((res) => setListOfItems(res.data))
//   .catch(err=> console.log(err))
// }, [])

const setLike = (id) => {
  const renderWithLikes = [...listOfItems];
  renderWithLikes.find(({Qid}) => Qid === id).liked = true;
  setListOfItems(renderWithLikes)
}
console.log(listOfItems)
// const setUnLike = (id) => {
//   const regretLikes = [...listOfItems];
  
//   regretLikes.find(({Qid}) => Qid === id).liked = false;
//   console.log(regretLikes);
//   setListOfItems(regretLikes)
// }


  return (
    <div className="grid">
      {/* {error && ( 
        <p>{error}</p>
      )} */}
      {listOfItems.map((item) => (
        <ReactPost
        key={item.Qid}
        {...item}
        likePost={setLike}
        // unLikePost={setUnLike}
        />
      ))}
      
    </div>
    );
}
 
export default BulletinBoard;