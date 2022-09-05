import { useEffect, useState } from "react";
import Loading from "./Loading"
import {BulletinBoard} from "./BulletinBoard";

const ReactPost = () => {
  const [newPage, setNewPage] = useState(true)
  const [questions, setQuestions] = useState("QWESTION");
  const [showButt, setShowButt] = useState(true)
  const [questItem, setQuestItem] = useState(null);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [answer, setAnswer] = useState("ANSWER MEEEEE");
  const [isLoading, setIsLoading] = useState(false);

 const allQuestions = BulletinBoard.map( item => item.question)


  useEffect(() => {
    if (newPage){ 
      const allQuestions = BulletinBoard.map( item => item.question)
      const allQuestItem = BulletinBoard.map (item => item)
      console.log(allQuestItem)
      setQuestItem(allQuestItem);

    }
  }, [newPage])
 


  const restart = () => {
  
  }

  const showMeAnswer = () => {
    setIsLoading(true);
    setShowButt(false);
   
 };
 
 useEffect(() => {
  if (isLoading) {
    setTimeout(() => {
    setIsLoading(false);
    setRevealAnswer(true);
  }, 2000);
  }
}, [isLoading]);



  return ( 
  <div>
  <article className="react-post grid">
    <span className="grid-item">
    <h2 className="question">
      {questions
    }</h2>
    {showButt ? 
    <button className="reveal"
    onClick={showMeAnswer} >Show me the answer </button> :null }
     {isLoading ? <Loading /> : null }
     {revealAnswer ? <h3 className="answer">{answer}</h3> : null }
     </span>
  </article>
  <button className="restart" onClick={restart} >Börja om</button>
  </div> );
}
 
export default ReactPost;