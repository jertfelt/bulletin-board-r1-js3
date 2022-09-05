import { useEffect, useState } from "react";
import Loading from "./Loading"
import {BulletinBoard} from "./BulletinBoard";

const ReactPost = () => {
  const [newPage, setNewPage] = useState(true)
  const [questions, setQuestions] = useState("QWESTION");
  const [singlequestion, setSingleQuestion] = useState("Question");
  const [questionID, setQuestionID] = useState("3")
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [answer, setAnswer] = useState("ANSWER MEEEEE");
  const [isLoading, setIsLoading] = useState(false);

  const allQuestions = BulletinBoard.map( item => item.question)


  useEffect(() => {
    if (newPage){ 
      
    }
  }, [newPage])
 


  const restart = () => {
  
  }

  const showMeAnswer = () => {
    setIsLoading(true);
   
   
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
  <div className="react-post">
    <h2 className="question">{questions}</h2>
    <button className="reveal"
    onClick={showMeAnswer} >Show me the answer </button>
     {isLoading ? <Loading /> : null }
     {revealAnswer ? <h3 className="answer">{answer}</h3> : null }
   <button className="restart" onClick={restart} >Börja om</button>


  </div> );
}
 
export default ReactPost;