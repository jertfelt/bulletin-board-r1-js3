import { useState} from "react";
import { BulletinBoard } from "./BulletinBoard";

import PostLiked from "./PostLiked";

const ReactPost = () => {

 
  const [showDiv, setShowDiv] = useState(false);
  // const [showDiv2, setShowDiv2] = useState(false);
  // const [showDiv3, setShowDiv3] = useState(false);
  // const [showDiv4, setShowDiv4] = useState(false);
  // const [showDiv5, setShowDiv5] = useState(false);
  const [likeButton, setLikeButton] = useState(true);
  

  const pickAndShow= (e) => {
    e.preventDefault();
    const chosenItem = e.currentTarget.value; 
  
  //   switch(parseInt(chosenItem)){
  //     case 1: 
  //     console.log("Ett")
  //     setShowDiv1(true);
  //     setLikeButton(false);
  //     break;
  //       case 2:
  //       console.log("Två")
  //       setShowDiv2(true);
  //       setLikeButton(false);
  //       break;
  //         case 3:
  //           console.log("Tre")
  //           setShowDiv3(true);
  //           setLikeButton(false);
  //           break;
  //           case 4: 
  //           console.log("Fyra")
  //           setShowDiv4(true);
  //           setLikeButton(false);
  //           break;
  //           case 5:
  //             console.log("Fem")
  //             setShowDiv5(true);
  //             setLikeButton(false);
  //             break;
  //     default:
  //     console.log("Något blev fel")
  //   }
  // }
  }
  return ( 
  <div className="grid">
  {BulletinBoard.map((item) => (
    <div className="grid-item"
    key={item.id}>
      <span className="grid-text">
      <p>Fråga #{item.id}</p>
      <h2>{item.question}</h2>
      <h3>{item.answer}</h3>
      </span>
      <div 
      className={`wrapper__${item.id} grid-likebutt`}
      >
        {!showDiv ? (
      
      <button
      onClick={() => {
        setShowDiv(!showDiv)
      }}>Gilla

      </button>
      
    
        ): (
          <div className="postlike">
          <PostLiked />
      
         
          <button
          
          onClick={() => {
            setShowDiv(!showDiv)
          }}> Ogilla
          </button>
         
         </div>
        )
      }
      {/* // <button
      // className="likebutton"
      // value={item.id}
      // onClick={pickAndShow}
      // > </button> */}
     
{/* 
      <div data-key={0 + item.id}>
      {showDiv1 ? 
      <PostLiked/>
      :null }
     
      </div>  */}
      </div>
    </div>  
    ))}
  </div> 
);
}
 
export default ReactPost;