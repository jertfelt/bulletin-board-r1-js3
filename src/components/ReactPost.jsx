import { useEffect, useState } from "react";
import Loading from "./Loading"
import {BulletinBoard} from "./BulletinBoard";
import PostLiked from "./PostLiked";
import useFetch from "./useFetch";
import Board from "./Board";

const ReactPost = () => {
  const {error, isLoading, data: faq } = useFetch("./questions.json")
  const [showAll, setShowAll] = useState(false);
  const [showAllToggle, setShowAllToggle] = useState(true);
  // const [isLoading, setIsLoading] = useState(false);
  const [showButt, setShowButt] = useState(true);
  const [showPost, setShowPost] = useState(false);

  const allQuestions = BulletinBoard.map( item => item.question);
  console.log(allQuestions);
  useEffect(() => {
    
  })

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
      // setIsLoading(false);
      setShowPost(true);
    }, 2000);
    }
  }, [isLoading]);

  const showSomeLikes = () => {
    // setIsLoading(true);
    setShowButt(false);
  }

  const RevealAll = () => {
    setShowAll(true);
    setShowAllToggle(false);
  }


  
  return ( 
  <div className="bulletin-board">
     { error && <div className="errorDiv">
      <img src="https://media3.giphy.com/media/ifdPjn6m4WyNlnXMTj/giphy.gif"
      alt="404"
      className="errormsg-img"></img><br></br>{ error }</div> }
      { isLoading && <Loading/> }
      { faq && <div>  {showAllToggle ? 
  <article className="menu">
    <button onClick={RevealAll}>Visa alla</button>
  </article> :null } <Board posts={faq} /> </div>}
     
  {showAll ? 
  <article className="react-post grid">
    {/* {[BulletinBoard(BulletinBoard.length)].map((props, i) => {
      return (
        <div className="grid-item">
          <h3>Fråga nummer #{i+1}</h3>
          <h2>{props.question}</h2>
          </div>
      )
    })} */}
  <div className="grid-item">

    <h2 className="question">Fråga #{BulletinBoard[0].id}: {BulletinBoard[0].question}</h2>
      <h3 className="answer">{BulletinBoard[0].answer}</h3> 
    <div>
      {showButt ? 
      <button className="reveal"
      onClick={showSomeLikes}>Gilla</button> :null }
      {isLoading ? <Loading /> : null }
      <div>
      {showPost ? <PostLiked /> :null}
      </div>
      
    </div>
    </div>
    <div className="grid-item">
    <h2 className="question">Fråga #{BulletinBoard[1].id}: {BulletinBoard[1].question}</h2>
   
    
      <h3 className="answer">{BulletinBoard[1].answer}</h3> 
     <div>
      {showButt ? 
      <button className="reveal"
      onClick={showSomeLikes}>Gilla</button> :null }
      {isLoading ? <Loading /> : null }
      <div>
      {showPost ? <PostLiked /> :null}
      </div>
      
    </div>
     </div>
     
     <div className="grid-item">
    <h2 className="question">Fråga #{BulletinBoard[2].id}: {BulletinBoard[2].question}</h2>
   
    
      <h3 className="answer">{BulletinBoard[2].answer}</h3> 
     <div>
      {showButt ? 
      <button className="reveal"
      onClick={showSomeLikes}>Gilla</button> :null }
      {isLoading ? <Loading /> : null }
      <div>
      {showPost ? <PostLiked /> :null}
      </div>
      
    </div>
     </div>
     <div className="grid-item">
    <h2 className="question">Fråga #{BulletinBoard[3].id}: {BulletinBoard[3].question}</h2>
      <h3 className="answer">{BulletinBoard[3].answer}</h3> 
     <div>
      {showButt ? 
      <button className="reveal"
      onClick={showSomeLikes}>Gilla</button> :null }
      {isLoading ? <Loading /> : null }
      <div>
      {showPost ? <PostLiked /> :null}
      </div>
      
    </div>
     </div>
     <div className="grid-item">
    <h2 className="question">Fråga #{BulletinBoard[4].id}: {BulletinBoard[4].question}</h2>
      <h3 className="answer">{BulletinBoard[4].answer}</h3> 
     <div>
      {showButt ? 
      <button className="reveal"
      onClick={showSomeLikes}>Gilla</button> :null }
      {isLoading ? <Loading /> : null }
      <div>
      {showPost ? <PostLiked /> :null}
      </div>
      
    </div>
     </div>
  </article>
  // <article>
  //   <div className="Further-Questions"> 
  //     <h2>Har du någon mer fråga?</h2>
  //   {/* //* Inte programmerat färdigt detta ännu:  */}
  //   <form>
  //     <label>
  //     Ja, jag undrar...</label>
  //     <textarea
  //     placeholder="Vad står React för?">
  //     </textarea>
  //     <input type="submit" value="Fråga!"/>
  //     <p>Obs: frågorna kommer besvaras i mån av tid, så fort det finns ett svar så kommer det synas här på hemsidan.</p>
  //     </form></div>
      
  // </article>
 :null}
  </div> );
}
 
export default ReactPost;