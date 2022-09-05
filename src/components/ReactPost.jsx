import { useEffect, useState } from "react";
import Loading from "./Loading"
import {BulletinBoard} from "./BulletinBoard";
import PostLiked from "./PostLiked";

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
      setQuestions(allQuestions)

    }
  }, [newPage])
 


  const restart = () => {
  setShowButt(true);
  setRevealAnswer(false);
  }

  const showMeAnswer = () => {
    //if sats - kolla id och hur man skickar
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
    <h2 className="question">Fråga #{BulletinBoard[0].id}: {BulletinBoard[0].question}</h2>
   
    {showButt ? 
    <button className="reveal"
    onClick={showMeAnswer}> SVAR</button> :null }
     {isLoading ? <Loading /> : null }
     {revealAnswer ? <h3 className="answer">{BulletinBoard[0].answer}</h3> : null }
     <span>
      <p><PostLiked></PostLiked></p>
    </span>
     </span>

     <span className="grid-item">
    <h2 className="question">Fråga #{BulletinBoard[1].id}: {BulletinBoard[1].question}</h2>
    {showButt ? 
    <button className="reveal"
    onClick={showMeAnswer}> SVAR</button> :null }
     {isLoading ? <Loading /> : null }
     {revealAnswer ? <h3 className="answer">{BulletinBoard[1].answer}</h3> : null }
     </span>
     <span className="grid-item">
    <h2 className="question">Fråga #{BulletinBoard[2].id}: {BulletinBoard[2].question}</h2>
    {showButt ? 
    <button className="reveal"
    onClick={showMeAnswer}> SVAR</button> :null }
     {isLoading ? <Loading /> : null }
     {revealAnswer ? <h3 className="answer">{BulletinBoard[2].answer}</h3> : null }
     </span>
     <span className="grid-item">
    <h2 className="question">Fråga #{BulletinBoard[3].id}: {BulletinBoard[3].question}</h2>
    {showButt ? 
    <button className="reveal"
    onClick={showMeAnswer}> SVAR</button> :null }
     {isLoading ? <Loading /> : null }
     {revealAnswer ? <h3 className="answer">{BulletinBoard[3].answer}</h3> : null }
     </span>
     <span className="grid-item">
    <h2 className="question">Fråga #{BulletinBoard[4].id}: {BulletinBoard[4].question}</h2>
    {showButt ? 
    <button className="reveal"
    onClick={showMeAnswer}> SVAR</button> :null }
     {isLoading ? <Loading /> : null }
     {revealAnswer ? <h3 className="answer">{BulletinBoard[4].answer}</h3> : null }
     </span>
  </article>
  <article>
    <div className="Further-Questions"> 
      <h2>Har du någon mer fråga?</h2>
    {/* //* Inte programmerat färdigt detta ännu:  */}
    <form>
      <label>
      Ja, jag undrar...</label>
      <textarea
      placeholder="Vad står React för?">
      </textarea>
      <input type="submit" value="Fråga!"/>
      <p>Obs: frågorna kommer besvaras i mån av tid, så fort det finns ett svar så kommer det synas här på hemsidan.</p>
      </form></div>
  </article>
  <button className="restart" onClick={restart}> Börja om</button>
  </div> );
}
 
export default ReactPost;