import { useEffect, useState } from "react";
import Loading from "./Loading"
import {BulletinBoard} from "./BulletinBoard";
import PostLiked from "./PostLiked";

const ReactPost = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [showButt, setShowButt] = useState(true);
  const [showPost, setShowPost] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
      setIsLoading(false);
      setShowPost(true);
    }, 2000);
    }
  }, [isLoading]);

  const showSomeLikes = () => {
    setIsLoading(true);
    setShowButt(false);
  }
  
  return ( 
  <div>
  <article className="react-post grid">
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
 
  </div> );
}
 
export default ReactPost;