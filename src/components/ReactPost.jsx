import { useEffect, useState } from "react";
import Loading from "./Loading"
import {BulletinBoard} from "./BulletinBoard";

const ReactPost = () => {
  const [newPage, setNewPage] = useState(true)
  const [question, setQuestion] = useState("QWESTION")
  const [answer, setAnswer] = useState("ANSWER MEEEEE");
  const [isLoading, setIsLoading] = useState(false);

  const allQuestions = BulletinBoard.map( item => item.question)

  allQuestions.forEach(question => {
    console.log(question)
  
  })

  const showMeAnswer = () => {
    setIsLoading(true);
 };
 
 useEffect(() => {
  if (isLoading) {
    setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  }
}, [isLoading]);



  return ( <div className="react-post">
    <h2 className="question">{question}</h2>
    <button className="reveal"
    onClick={showMeAnswer} >Show me the answer </button>
     {isLoading ? <Loading /> :  <h3 className="answer">{answer}</h3>}
   


  </div> );
}
 
export default ReactPost;