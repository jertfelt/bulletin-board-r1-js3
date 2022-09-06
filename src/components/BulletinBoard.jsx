import { useState } from "react";

const BulletinBoard = () => {
  const [items, setItems] = useState([
    {
      id:5,
      question: " Vad är en komponent?",
      answer: "En komponent är en beståndsdel i React - kan vara en header, en nav, en funktion. Genom att använda sig av komponenter kan hemsidorna vara enklare att göra användarvänliga - då man delar upp i komponenter. "
    },
    { id:4,
      question: " Vad ÄR React egentligen?",
      answer: "Facebook utvecklade ramverket React, och det vilar på Javascript men är optimerat för användare - dvs att en besökare till appen eller hemsidan ska ha en sån sömlös vistelse som möjligt. Hur då? Jo: man renderar ut nya HTML istället för att hämta HTML. Det blir därför mer dynamiskt."
    }
  ])
  return ( 
  <div className="grid">

  </div> );
}
 
export default BulletinBoard;