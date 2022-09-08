import questionsdata from "../data/QuestionsData.json"
import { useState, useEffect } from "react";
import ReactPost from "./ReactPost";
// import axios from "axios";

const BulletinBoard = () => {

  const [listOfItems, setListOfItems] = useState([])
  
  useEffect(() => {
      const firstRender = JSON.parse(JSON.stringify(questionsdata)).faq;
      setListOfItems(firstRender);

  }, [])

const handleToggle = (id) => {
  let mapped = listOfItems.map(item => {
    return item.Qid === Number(id) ? { ...item, liked: !item.liked} : { ...item};
  })
  setListOfItems(mapped);
}

  return (
    <div className="grid">
     
      {listOfItems.map((item) => (
        <ReactPost
        handleToggle={handleToggle}
        key={item.Qid}
        {...item}
        
        />
      ))}
      
    </div>
    );
}
 
export default BulletinBoard;